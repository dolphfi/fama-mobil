
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Package,
    Lock,
    CreditCard,
    MapPin,
    Gift,
    User,
    Smartphone,
    ShoppingBag,
} from 'lucide-react';

const ClientDashboard = () => {
    const topCards = [
        {
            icon: Package,
            title: 'Vos Commandes',
            description: 'Suivre, retourner ou acheter à nouveau',
            link: '/orders'
        },
        {
            icon: Lock,
            title: 'Connexion & Sécurité',
            description: 'Modifier login, nom et numéro de mobile',
            link: '/client/security'
        },
        {
            icon: User,
            title: 'Kolabo',
            description: 'Gérer votre adhésion, voir les avantages',
            link: '/client/prime'
        },
        {
            icon: MapPin,
            title: 'Vos Adresses',
            description: 'Modifier les adresses pour les commandes',
            link: '/client/addresses'
        },
        {
            icon: ShoppingBag,
            title: 'Compte Business',
            description: 'Inscrivez-vous pour économiser avec des prix exclusifs',
            link: '/client/business'
        },
        {
            icon: Gift,
            title: 'Cartes Cadeaux',
            description: 'Voir le solde ou échanger une carte',
            link: '/client/gift-cards'
        },
        {
            icon: CreditCard,
            title: 'Vos Paiements',
            description: 'Gérer les méthodes de paiement et les paramètres',
            link: '/client/payments'
        },
        {
            icon: User,
            title: 'Profils Famille',
            description: 'Gérer les profils et les permissions',
            link: '/client/family'
        },
        {
            icon: Smartphone,
            title: 'Services Numériques',
            description: 'Dépannage et gestion des appareils',
            link: '/client/devices'
        }
    ];

    const linkSections = [
        {
            title: 'Préférences d\'achat',
            links: [
                'Vos adresses',
                'Cartes de crédit Fama',
                'Jour de livraison Fama',
                'Vos paiements',
                'Vos transactions',
                'Préférences de shopping',
                'Paramètres 1-Click',
                'TVA et facturation',
                'Coupons',
                'Alertes de sécurité produit'
            ]
        },
        {
            title: 'Contenu numérique et appareils',
            links: [
                'Bibliothèque de contenu',
                'Appareils',
                'Gérer la livraison numérique',
                'Vos applications',
                'Paramètres vidéo Prime',
                'Paramètres Amazon Music',
                'Paramètres Twitch',
                'Livres audio',
                'Cadeaux numériques reçus'
            ]
        },
        {
            title: 'Abonnements et adhésions',
            links: [
                'Kindle Unlimited',
                'Chaînes Prime Video',
                'Music Unlimited',
                'Économisez en vous abonnant',
                'Fama Kids+',
                'Abonnement Audible',
                'Achats automatiques',
                'Abonnements magazines',
                'Autres abonnements'
            ]
        },
        {
            title: 'Communication et contenu',
            links: [
                'Abonnements email',
                'Préférences publicitaires',
                'Préférences de communication',
                'Mises à jour de livraison par SMS',
                'Notifications Alexa',
                'Vidéos téléchargées',
                'Rappels d\'achat'
            ]
        },
        {
            title: 'Programmes d\'achat et locations',
            links: [
                'Achetez maintenant, payez plus tard',
                'Gestion de votre famille Fama',
                'Locations par Fama',
                'Récompenses No-Rush',
                'Programme Ados',
                'Animaux de compagnie',
                'Boutique avec points',
                'Seconde chance Fama',
                'Solde des avantages'
            ]
        },
        {
            title: 'Autres programmes',
            links: [
                'Lier un compte',
                'Votre compte vendeur',
                'Fama Pay',
                'Gérer vos reprises',
                'Services Web Fama',
                'Programme d\'exemption fiscale',
                'Vos intérêts',
                'Pharmacie Fama',
                'Connecteur santé',
                'Paiement médical à l\'acte'
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <h1 className="text-3xl font-normal mb-6">Votre Compte</h1>

            {/* Top Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {topCards.map((card, index) => (
                    <Link
                        key={index}
                        to={card.link}
                        className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                    >
                        <div className="mr-4 mt-1">
                            <card.icon className="w-9 h-9 text-customBlue group-hover:text-customDarkBlue" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h2 className="text-lg font-normal text-gray-800 mb-1">{card.title}</h2>
                            <p className="text-sm text-gray-600 leading-snug">{card.description}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <hr className="border-gray-200 mb-12" />

            {/* Link Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                {linkSections.map((section, index) => (
                    <div key={index} className="space-y-3">
                        <h3 className="font-bold text-lg text-gray-800">{section.title}</h3>
                        <ul className="space-y-2">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <Link to="#" className="text-sm text-customBlue hover:text-customDarkBlue hover:underline">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Manage Data Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                        <h3 className="font-bold text-lg text-gray-800">Gérer vos données</h3>
                        <ul className="space-y-2">
                            <li><Link to="#" className="text-sm text-customBlue hover:text-customDarkBlue hover:underline">Demander vos données</Link></li>
                            <li><Link to="#" className="text-sm text-customBlue hover:text-customDarkBlue hover:underline">Gérer les applications et services</Link></li>
                            <li><Link to="#" className="text-sm text-customBlue hover:text-customDarkBlue hover:underline">Fermer votre compte Fama</Link></li>
                            <li><Link to="#" className="text-sm text-customBlue hover:text-customDarkBlue hover:underline">Notice de confidentialité</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDashboard;

