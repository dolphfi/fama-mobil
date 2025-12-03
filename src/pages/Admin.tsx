import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Package,
    ShoppingCart,
    AlertTriangle,
    Settings,
    FileText,
    BarChart3,
    MessageSquare,
    LogOut,
    ChevronDown,
    ChevronUp,
    Bell,
    UserCircle,
    Store,
    DollarSign,
    UserPlus,
    Briefcase,
    CreditCard,
    Menu,
    ShieldAlert,
    Activity,
    Ban,
    Image,
    Layers,
    Server,
    Database,
    Radio,
    Code,
    Webhook,
    Globe,
    Languages,
    Coins,
    Scale,
    ShieldCheck,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../components/ui/table';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../components/ui/tooltip";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from '../components/ui/command';

import {
    Keyboard,
    Plus,
    Github,
    LifeBuoy,
    Cloud,
    Mail,
    PlusCircle,
    User,
    MoreVertical,
    Calculator,
    Calendar,
    Smile
} from 'lucide-react';

const Admin = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('dashboard');
    const [expandedSections, setExpandedSections] = useState<string[]>(['general']);

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const [open, setOpen] = React.useState(false);
    const commandRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (commandRef.current && !commandRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const toggleSection = (sectionId: string) => {
        setExpandedSections(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [sectionId]
        );
    };

    const menuSections = [
        {
            id: 'general',
            title: 'Général',
            collapsible: false,
            items: [
                { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
                { id: 'analytics', label: 'Analyses', icon: BarChart3 },
                { id: 'reports', label: 'Rapports', icon: FileText },
            ]
        },
        {
            id: 'users',
            title: 'Gestion Utilisateurs',
            collapsible: true,
            icon: Users,
            items: [
                { id: 'users-admin', label: 'Admin', icon: UserCircle },
                { id: 'users-boutique', label: 'Boutique (Pharmacie)', icon: Store },
                { id: 'users-client', label: 'Client', icon: Users },
            ]
        },
        {
            id: 'commerce',
            title: 'Gestion Commerce',
            collapsible: true,
            icon: ShoppingCart,
            items: [
                { id: 'products', label: 'Produits', icon: Package },
                { id: 'orders', label: 'Commandes', icon: ShoppingCart },
                { id: 'disputes', label: 'Litiges', icon: AlertTriangle, badge: 5 },
            ]
        },
        {
            id: 'resources',
            title: 'Gestion Ressources',
            collapsible: true,
            icon: Briefcase,
            items: [
                { id: 'partners', label: 'Ressources Humaines', icon: Briefcase },
                { id: 'inventory', label: 'Ressources Matériel', icon: Package },
                { id: 'finance', label: 'Ressources Financière', icon: CreditCard },
            ]
        },
        {
            id: 'security',
            title: 'Sécurité & Audit',
            collapsible: true,
            icon: ShieldAlert,
            items: [
                { id: 'audit-logs', label: 'Logs d\'activité', icon: Activity },
                { id: 'banned-users', label: 'Bannis & Suspendus', icon: Ban },
            ]
        },
        {
            id: 'cms',
            title: 'Gestion de Contenu',
            collapsible: true,
            icon: Layers,
            items: [
                { id: 'banners', label: 'Bannières & Pubs', icon: Image },
                { id: 'categories', label: 'Catégories', icon: Layers },
            ]
        },
        {
            id: 'system',
            title: 'Système & Maintenance',
            collapsible: true,
            icon: Server,
            items: [
                { id: 'server-status', label: 'État du Serveur', icon: Server },
                { id: 'backups', label: 'Sauvegardes', icon: Database },
            ]
        },
        {
            id: 'notifications',
            title: 'Communication',
            collapsible: true,
            icon: Radio,
            items: [
                { id: 'global-alert', label: 'Envoyer une alerte', icon: Radio },
            ]
        },
        {
            id: 'api',
            title: 'API & Développeurs',
            collapsible: true,
            icon: Code,
            items: [
                { id: 'api-keys', label: 'Clés API', icon: Code },
                { id: 'webhooks', label: 'Webhooks', icon: Webhook },
            ]
        },
        {
            id: 'i18n',
            title: 'Internationalisation',
            collapsible: true,
            icon: Globe,
            items: [
                { id: 'languages', label: 'Langues & Traductions', icon: Languages },
                { id: 'currencies', label: 'Devises & Zones', icon: Coins },
            ]
        },
        {
            id: 'legal',
            title: 'Légal & Conformité',
            collapsible: true,
            icon: Scale,
            items: [
                { id: 'terms', label: 'CGU & Mentions', icon: FileText },
                { id: 'gdpr', label: 'Données & RGPD', icon: ShieldCheck },
            ]
        },
        {
            id: 'other',
            title: 'Autre',
            collapsible: false,
            items: [
                { id: 'settings', label: 'Paramètres', icon: Settings },
            ]
        },
    ];

    const stats = [
        {
            label: 'Utilisateurs',
            value: '12,543',
            change: '+10.1% depuis le mois dernier',
            icon: Users,
            iconBg: 'bg-blue-100',
            iconColor: 'text-customBlue'
        },
        {
            label: 'Commandes',
            value: '8,234',
            change: '+5 depuis l\'année dernière',
            icon: ShoppingCart,
            iconBg: 'bg-purple-100',
            iconColor: 'text-purple-600'
        },
        {
            label: 'Revenus',
            value: '$456,789',
            change: '+3 nouveaux ce semestre',
            icon: DollarSign,
            iconBg: 'bg-orange-100',
            iconColor: 'text-orange-600'
        },
        {
            label: 'Litiges',
            value: '5',
            change: '+12.5% de revenus',
            icon: AlertTriangle,
            iconBg: 'bg-red-100',
            iconColor: 'text-red-600'
        },
    ];

    const recentActivities = [
        {
            name: 'Inscription de John Doe',
            type: 'Utilisateur',
            status: 'Complété',
            statusColor: 'bg-blue-500',
            date: '2024-12-02'
        },
        {
            name: 'Commande #ORD-1234',
            type: 'Commande',
            status: 'En cours',
            statusColor: 'bg-yellow-500',
            date: '2024-12-02'
        },
        {
            name: 'Ajout du produit Aspirine',
            type: 'Produit',
            status: 'Complété',
            statusColor: 'bg-blue-500',
            date: '2024-12-01'
        },
        {
            name: 'Litige DSP-001',
            type: 'Support',
            status: 'Annulé',
            statusColor: 'bg-red-500',
            date: '2024-12-01'
        },
        {
            name: 'Message de Marie Curie',
            type: 'Message',
            status: 'Complété',
            statusColor: 'bg-blue-500',
            date: '2024-11-30'
        },
    ];

    const getBreadcrumbItems = () => {
        for (const section of menuSections) {
            const item = section.items.find(i => i.id === activeSection);
            if (item) {
                return {
                    section: section.title,
                    page: item.label
                };
            }
        }
        return { section: 'Général', page: 'Tableau de bord' };
    };

    const breadcrumbInfo = getBreadcrumbItems();

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <TooltipProvider delayDuration={0}>
                <aside
                    className={`${isCollapsed ? 'w-20' : 'w-64'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out`}
                >
                    {/* Header with Logo and Toggle Button */}
                    <div className={`p-5 border-b border-gray-200 py-3 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between '}`}>
                        {/* Logo - Only visible when expanded */}
                        {!isCollapsed && (
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-customDarkBlue rounded flex items-center justify-center flex-shrink-0">
                                    <Menu className="h4 w-4 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h1 className="text-sm font-bold text-customDarkBlue leading-tight truncate">
                                        Fama Mobil
                                    </h1>
                                    <p className="text-xs text-gray-500 truncate">Administration</p>
                                </div>
                            </div>
                        )}

                        {/* Toggle Button - Grid Icon */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={toggleSidebar}
                                    className="p-1 hover:bg-gray-100 rounded flex-shrink-0 text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect x="3" y="3" width="7" height="7" rx="1" />
                                        <rect x="14" y="3" width="7" height="7" rx="1" />
                                        <rect x="14" y="14" width="7" height="7" rx="1" />
                                        <rect x="3" y="14" width="7" height="7" rx="1" />
                                    </svg>
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                {isCollapsed ? 'Agrandir le menu' : 'Réduire le menu'}
                            </TooltipContent>
                        </Tooltip>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-3 space-y-1 overflow-y-auto overflow-x-hidden">
                        {menuSections.map((section) => {
                            const isExpanded = expandedSections.includes(section.id);

                            return (
                                <div key={section.id}>
                                    {/* Section Header */}
                                    {section.collapsible ? (
                                        isCollapsed ? (
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <button
                                                        onClick={() => !isCollapsed && toggleSection(section.id)}
                                                        className={`w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all justify-center`}
                                                    >
                                                        {section.icon && <section.icon className="h-4 w-4 flex-shrink-0" />}
                                                    </button>
                                                </TooltipTrigger>
                                                <TooltipContent side="right">
                                                    {section.title}
                                                </TooltipContent>
                                            </Tooltip>
                                        ) : (
                                            <button
                                                onClick={() => toggleSection(section.id)}
                                                className={`w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all`}
                                            >
                                                {section.icon && <section.icon className="h-4 w-4 flex-shrink-0" />}
                                                <span className="flex-1 text-left text-sm font-medium truncate">{section.title}</span>
                                                {isExpanded ? (
                                                    <ChevronUp className="h-4 w-4 transition-transform flex-shrink-0" />
                                                ) : (
                                                    <ChevronDown className="h-4 w-4 transition-transform flex-shrink-0" />
                                                )}
                                            </button>
                                        )
                                    ) : (
                                        <div className={`px-3 py-2 ${isCollapsed ? 'hidden' : ''}`}>
                                            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider truncate">
                                                {section.title}
                                            </h3>
                                        </div>
                                    )}

                                    {/* Section Items */}
                                    {(!section.collapsible || isExpanded || isCollapsed) && (
                                        <div className={`space-y-0.5 mt-1 ${isCollapsed ? '' : ''}`}>
                                            {section.items.map((item) => {
                                                const isActive = activeSection === item.id;

                                                const ButtonContent = (
                                                    <button
                                                        key={item.id}
                                                        onClick={() => setActiveSection(item.id)}
                                                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all text-sm 
                                                            ${isCollapsed ? 'justify-center' : (section.collapsible ? 'pl-10' : 'pl-3')} 
                                                            ${isActive
                                                                ? 'bg-customBlue text-white font-medium'
                                                                : 'text-gray-700 hover:bg-gray-100'
                                                            }`}
                                                    >
                                                        <item.icon className="h-4 w-4 flex-shrink-0" />
                                                        {!isCollapsed && (
                                                            <>
                                                                <span className="flex-1 text-left truncate">{item.label}</span>
                                                                {'badge' in item && item.badge && (
                                                                    <Badge
                                                                        variant="secondary"
                                                                        className={`text-xs ${isActive ? 'bg-white/20 text-white border-0' : 'bg-gray-200 text-gray-700'}`}
                                                                    >
                                                                        {item.badge}
                                                                    </Badge>
                                                                )}
                                                            </>
                                                        )}
                                                    </button>
                                                );

                                                if (isCollapsed) {
                                                    return (
                                                        <Tooltip key={item.id}>
                                                            <TooltipTrigger asChild>
                                                                {ButtonContent}
                                                            </TooltipTrigger>
                                                            <TooltipContent side="right">
                                                                {item.label}
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    );
                                                }

                                                return ButtonContent;
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* User Profile */}
                    <div className="p-1 border-t border-gray-200">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className={`w-full flex items-center gap-3 p-1 rounded-lg cursor-pointer outline-none hover:bg-gray-50 ${isCollapsed ? 'justify-center' : ''}`}>
                                    <Avatar className="h-9 w-9 flex-shrink-0">
                                        <AvatarFallback className="bg-customBlue text-white text-sm font-medium">
                                            {(() => {
                                                const name = user?.name || 'Admin User';
                                                const parts = name.split(' ').filter(Boolean);
                                                if (parts.length === 0) return 'A';
                                                if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
                                                return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
                                            })()}
                                        </AvatarFallback>
                                    </Avatar>
                                    {!isCollapsed && (
                                        <>
                                            <div className="flex-1 min-w-0 text-left">
                                                <p className="text-sm font-medium text-gray-900 truncate">{user?.name || 'Admin User'}</p>
                                                <p className="text-xs text-gray-500 truncate">Admin</p>
                                            </div>
                                            <MoreVertical className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                        </>
                                    )}
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align={isCollapsed ? "start" : "end"} side="right" sideOffset={10}>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">{user?.name}</p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            {user?.email || 'admin@example.com'}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard className="mr-2 h-4 w-4" />
                                        <span>Billing</span>
                                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Settings</span>
                                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Keyboard className="mr-2 h-4 w-4" />
                                        <span>Keyboard shortcuts</span>
                                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Users className="mr-2 h-4 w-4" />
                                        <span>Team</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>
                                            <UserPlus className="mr-2 h-4 w-4" />
                                            <span>Invite users</span>
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuItem>
                                                    <Mail className="mr-2 h-4 w-4" />
                                                    <span>Email</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <MessageSquare className="mr-2 h-4 w-4" />
                                                    <span>Message</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <PlusCircle className="mr-2 h-4 w-4" />
                                                    <span>More...</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                    <DropdownMenuItem>
                                        <Plus className="mr-2 h-4 w-4" />
                                        <span>New Team</span>
                                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Github className="mr-2 h-4 w-4" />
                                    <span>GitHub</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LifeBuoy className="mr-2 h-4 w-4" />
                                    <span>Support</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem disabled>
                                    <Cloud className="mr-2 h-4 w-4" />
                                    <span>API</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleLogout}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </aside>
            </TooltipProvider>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="bg-white border-b border-gray-200 px-8 py-2">
                    <div className="flex items-center justify-center">
                        {/* Centered Search - Command Palette */}
                        <div className="relative max-w-2xl w-full z-50" ref={commandRef}>
                            <Command className="relative w-full overflow-visible bg-transparent">
                                <div className="relative">
                                    <CommandInput
                                        placeholder="Rechercher (Ctrl+K)..."
                                        wrapperClassName="bg-white border border-gray-200 rounded-lg px-4 focus-within:ring-2 focus-within:ring-customBlue transition-all"
                                        className="h-10 py-2"
                                        onFocus={() => setOpen(true)}
                                    />
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 pointer-events-none">
                                        <kbd className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-300 rounded">
                                            Ctrl
                                        </kbd>
                                        <kbd className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-300 rounded">
                                            K
                                        </kbd>
                                    </div>
                                </div>

                                {open && (
                                    <div className="absolute top-full left-0 w-full mt-2 rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden">
                                        <CommandList className="max-h-[300px] overflow-y-auto p-2">
                                            <CommandEmpty>No results found.</CommandEmpty>
                                            <CommandGroup heading="Suggestions">
                                                <CommandItem onSelect={() => setOpen(false)}>
                                                    <Calendar className="mr-2 h-4 w-4" />
                                                    <span>Calendar</span>
                                                </CommandItem>
                                                <CommandItem onSelect={() => setOpen(false)}>
                                                    <Smile className="mr-2 h-4 w-4" />
                                                    <span>Search Emoji</span>
                                                </CommandItem>
                                                <CommandItem onSelect={() => setOpen(false)}>
                                                    <Calculator className="mr-2 h-4 w-4" />
                                                    <span>Calculator</span>
                                                </CommandItem>
                                            </CommandGroup>
                                            <CommandSeparator />
                                            <CommandGroup heading="Settings">
                                                <CommandItem onSelect={() => setOpen(false)}>
                                                    <User className="mr-2 h-4 w-4" />
                                                    <span>Profile</span>
                                                    <CommandShortcut>⌘P</CommandShortcut>
                                                </CommandItem>
                                                <CommandItem onSelect={() => setOpen(false)}>
                                                    <CreditCard className="mr-2 h-4 w-4" />
                                                    <span>Billing</span>
                                                    <CommandShortcut>⌘B</CommandShortcut>
                                                </CommandItem>
                                                <CommandItem onSelect={() => setOpen(false)}>
                                                    <Settings className="mr-2 h-4 w-4" />
                                                    <span>Settings</span>
                                                    <CommandShortcut>⌘S</CommandShortcut>
                                                </CommandItem>
                                            </CommandGroup>
                                        </CommandList>
                                    </div>
                                )}
                            </Command>
                        </div>

                        {/* Right side - Notifications only */}
                        <div className="absolute right-8 flex items-center gap-4">
                            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <Bell className="h-5 w-5 text-gray-600" />
                                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
                    {/* Breadcrumb */}
                    <div className="mb-6">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Admin</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink className="cursor-default">{breadcrumbInfo.section}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{breadcrumbInfo.page}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    {activeSection === 'dashboard' && (
                        <div className="space-y-6">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-gray-600 text-sm font-medium">{stat.label}</h3>
                                                <stat.icon className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                                                <p className="text-xs text-gray-500">{stat.change}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Recent Activity */}
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold">Activité Récente</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="border-b border-gray-200">
                                                <TableHead className="font-semibold text-gray-700">Nom</TableHead>
                                                <TableHead className="font-semibold text-gray-700">Type</TableHead>
                                                <TableHead className="font-semibold text-gray-700">Statut</TableHead>
                                                <TableHead className="font-semibold text-gray-700">Date</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {recentActivities.map((activity, idx) => (
                                                <TableRow key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <TableCell className="font-medium text-gray-900">{activity.name}</TableCell>
                                                    <TableCell className="text-gray-600">{activity.type}</TableCell>
                                                    <TableCell>
                                                        <Badge className={`${activity.statusColor} text-white border-0`}>
                                                            {activity.status}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="text-gray-600">{activity.date}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {activeSection !== 'dashboard' && (
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">
                                    {menuSections.flatMap(s => s.items).find(item => item.id === activeSection)?.label}
                                </CardTitle>
                                <CardDescription>Cette section est en cours de développement</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Le contenu de cette section sera ajouté prochainement...</p>
                            </CardContent>
                        </Card>
                    )}
                </main>
            </div>

        </div >
    );
};

export default Admin;
