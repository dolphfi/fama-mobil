import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    LayoutDashboard,
    ShoppingBag,
    Package,
    Settings,
    LogOut,
    Bell,
    ChevronDown,
    ChevronUp,
    User,
    CreditCard,
    MoreVertical,
    Store,
    DollarSign,
    Star,
    TrendingUp,
    Tag,
    MessageSquare,
    RotateCcw,
    Truck,
    FileText,
    Landmark,
    FileCheck,
    ArrowDownToLine,
    Megaphone,
    Percent,
    HelpCircle,
    LifeBuoy,
    Users,
    Shield,
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
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
} from '../components/ui/command';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../components/ui/table';

const PartnerDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('dashboard');
    const [expandedSections, setExpandedSections] = useState<string[]>(['general', 'shop']);

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
                { id: 'analytics', label: 'Analyses', icon: TrendingUp },
            ]
        },
        {
            id: 'shop',
            title: 'Ma Boutique',
            collapsible: true,
            icon: Store,
            items: [
                { id: 'products', label: 'Mes Produits', icon: Package },
                { id: 'orders', label: 'Commandes', icon: ShoppingBag, badge: 3 },
                { id: 'promotions', label: 'Promotions', icon: Tag },
                { id: 'messages', label: 'Messages', icon: MessageSquare, badge: 2 },
                { id: 'returns', label: 'Retours & Litiges', icon: RotateCcw },
                { id: 'delivery', label: 'Livraison', icon: Truck },
                { id: 'reviews', label: 'Avis Clients', icon: Star },
                { id: 'shop-settings', label: 'Configuration Boutique', icon: Settings },
            ]
        },
        {
            id: 'finance',
            title: 'Ressource Financier',
            collapsible: true,
            icon: DollarSign,
            items: [
                { id: 'wallet', label: 'Portefeuille', icon: CreditCard },
                { id: 'transactions', label: 'Historique', icon: TrendingUp },
                { id: 'invoices', label: 'Factures', icon: FileText },
                { id: 'bank-details', label: 'Coordonnées Bancaires', icon: Landmark },
                { id: 'tax-documents', label: 'Documents Fiscaux', icon: FileCheck },
                { id: 'withdraw', label: 'Demande de Retrait', icon: ArrowDownToLine },
            ]
        },
        {
            id: 'marketing',
            title: 'Marketing & Publicité',
            collapsible: true,
            icon: Megaphone,
            items: [
                { id: 'campaigns', label: 'Campagnes Pub', icon: Megaphone },
                { id: 'coupons', label: 'Coupons & Offres', icon: Percent },
            ]
        },
        {
            id: 'team',
            title: 'Gestion d\'Équipe',
            collapsible: true,
            icon: Users,
            items: [
                { id: 'members', label: 'Membres', icon: Users },
                { id: 'roles', label: 'Rôles & Permissions', icon: Shield },
            ]
        },
        {
            id: 'support',
            title: 'Support & Aide',
            collapsible: true,
            icon: LifeBuoy,
            items: [
                { id: 'help-center', label: 'Centre d\'Aide', icon: HelpCircle },
                { id: 'contact-admin', label: 'Contacter l\'Admin', icon: MessageSquare },
            ]
        },
    ];

    const stats = [
        {
            label: 'Ventes du mois',
            value: '1,234,500 FCFA',
            change: '+15% vs mois dernier',
            icon: DollarSign,
        },
        {
            label: 'Commandes en cours',
            value: '12',
            change: '3 à expédier aujourd\'hui',
            icon: ShoppingBag,
        },
        {
            label: 'Produits actifs',
            value: '45',
            change: '2 en rupture de stock',
            icon: Package,
        },
        {
            label: 'Note moyenne',
            value: '4.8/5',
            change: 'Basé sur 128 avis',
            icon: Star,
        },
    ];

    const recentActivities = [
        {
            name: 'Commande #CMD-8832',
            type: 'Nouvelle Commande',
            status: 'À traiter',
            statusColor: 'bg-yellow-500',
            date: 'Il y a 10 min'
        },
        {
            name: 'Paracétamol 500mg',
            type: 'Stock Faible',
            status: 'Attention',
            statusColor: 'bg-red-500',
            date: 'Il y a 1h'
        },
        {
            name: 'Avis de Jean K.',
            type: 'Nouveau Commentaire',
            status: '5 Étoiles',
            statusColor: 'bg-green-500',
            date: 'Il y a 2h'
        },
        {
            name: 'Virement reçu',
            type: 'Paiement',
            status: 'Complété',
            statusColor: 'bg-blue-500',
            date: 'Hier'
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
                    <div className={`p-4 border-b border-gray-200 h-16 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                        {/* Logo - Only visible when expanded */}
                        {!isCollapsed && (
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center flex-shrink-0">
                                    <Store className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h1 className="text-sm font-bold text-gray-900 leading-tight truncate">
                                        Espace Partenaire
                                    </h1>
                                    <p className="text-xs text-gray-500 truncate">Pharmacie Centrale</p>
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
                                                                ? 'bg-green-600 text-white font-medium'
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
                                        <AvatarFallback className="bg-green-600 text-white text-sm font-medium">
                                            PC
                                        </AvatarFallback>
                                    </Avatar>
                                    {!isCollapsed && (
                                        <>
                                            <div className="flex-1 min-w-0 text-left">
                                                <p className="text-sm font-medium text-gray-900 truncate">Pharmacie Centrale</p>
                                                <p className="text-xs text-gray-500 truncate">Partenaire</p>
                                            </div>
                                            <MoreVertical className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                        </>
                                    )}
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align={isCollapsed ? "start" : "end"} side="right" sideOffset={10}>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">Pharmacie Centrale</p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            contact@pharmacie-centrale.com
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Profil Boutique</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard className="mr-2 h-4 w-4" />
                                        <span>Abonnement</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Paramètres</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleLogout}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Déconnexion</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </aside>
            </TooltipProvider>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="bg-white border-b border-gray-200 px-8 py-3">
                    <div className="flex items-center justify-center">
                        {/* Centered Search - Command Palette */}
                        <div className="relative max-w-2xl w-full z-50" ref={commandRef}>
                            <Command className="relative w-full overflow-visible bg-transparent">
                                <div className="relative">
                                    <CommandInput
                                        placeholder="Rechercher (Ctrl+K)..."
                                        wrapperClassName="bg-white border border-gray-200 rounded-lg px-4 focus-within:ring-2 focus-within:ring-green-500 transition-all"
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
                                    <div className="absolute top-full left-0 right-0 mt-2 rounded-lg border bg-white shadow-xl overflow-hidden z-50">
                                        <CommandList>
                                            <CommandEmpty>Aucun résultat.</CommandEmpty>
                                            <CommandGroup heading="Actions Rapides">
                                                <CommandItem onSelect={() => setOpen(false)}>
                                                    <Package className="mr-2 h-4 w-4" />
                                                    <span>Ajouter un produit</span>
                                                </CommandItem>
                                                <CommandItem onSelect={() => setOpen(false)}>
                                                    <ShoppingBag className="mr-2 h-4 w-4" />
                                                    <span>Voir les commandes</span>
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
                                    <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Partenaire</BreadcrumbLink>
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
                                    <CardDescription>Dernières mises à jour de votre boutique</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="border-b border-gray-200">
                                                <TableHead className="font-semibold text-gray-700">Détail</TableHead>
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
                                <CardDescription>Gestion de votre boutique</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Le module de gestion pour cette section sera disponible prochainement.</p>
                            </CardContent>
                        </Card>
                    )}
                </main>
            </div>

        </div >
    );
};

export default PartnerDashboard;
