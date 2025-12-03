
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, Users, Globe, Store, Mail, Phone, User, MapPin } from 'lucide-react';

const BecomePartner = () => {
    const formRef = useRef<HTMLDivElement>(null);
    const [submitted, setSubmitted] = useState(false);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-[#232f3e] text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Devenez un Partenaire Fama Mobil</h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Rejoignez des milliers de vendeurs et atteignez des millions de clients.
                        Commencez à vendre vos produits médicaux et pharmaceutiques dès aujourd'hui.
                    </p>
                    <button
                        onClick={scrollToForm}
                        className="inline-block bg-customGreen hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md text-lg transition-colors cursor-pointer"
                    >
                        Remplir le formulaire d'inscription
                    </button>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Pourquoi vendre sur Fama Mobil ?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex justify-center mb-4">
                            <Globe className="w-12 h-12 text-customBlue" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Portée Nationale</h3>
                        <p className="text-gray-600">
                            Vendez vos produits à des clients dans tout le pays, pas seulement dans votre quartier.
                        </p>
                    </div>

                    <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex justify-center mb-4">
                            <Users className="w-12 h-12 text-customBlue" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Millions de Clients</h3>
                        <p className="text-gray-600">
                            Accédez à notre base de clients fidèles qui recherchent des produits de qualité.
                        </p>
                    </div>

                    <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex justify-center mb-4">
                            <TrendingUp className="w-12 h-12 text-customBlue" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Outils de Croissance</h3>
                        <p className="text-gray-600">
                            Utilisez nos outils d'analyse et de marketing pour booster vos ventes.
                        </p>
                    </div>

                    <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex justify-center mb-4">
                            <CheckCircle className="w-12 h-12 text-customBlue" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Paiements Sécurisés</h3>
                        <p className="text-gray-600">
                            Recevez vos paiements rapidement et en toute sécurité directement sur votre compte.
                        </p>
                    </div>
                </div>
            </div>

            {/* Steps Section (Optional, can be removed or kept) */}
            {/* Keeping the original Steps Section as it was not explicitly removed by the instruction,
                and the new content does not directly replace it, but adds a form section. */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Comment ça marche ?</h2>

                    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
                        <div className="flex flex-col items-center max-w-xs text-center">
                            <div className="w-12 h-12 bg-customBlue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                            <h3 className="text-lg font-bold mb-2">Inscrivez-vous</h3>
                            <p className="text-gray-600">Créez votre compte vendeur en quelques minutes.</p>
                        </div>
                        <div className="hidden md:block w-24 h-1 bg-gray-300"></div>
                        <div className="flex flex-col items-center max-w-xs text-center">
                            <div className="w-12 h-12 bg-customBlue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                            <h3 className="text-lg font-bold mb-2">Ajoutez vos produits</h3>
                            <p className="text-gray-600">Listez votre catalogue avec photos et descriptions.</p>
                        </div>
                        <div className="hidden md:block w-24 h-1 bg-gray-300"></div>
                        <div className="flex flex-col items-center max-w-xs text-center">
                            <div className="w-12 h-12 bg-customBlue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                            <h3 className="text-lg font-bold mb-2">Commencez à vendre</h3>
                            <p className="text-gray-600">Recevez des commandes et expédiez vos produits.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Registration Form Section */}
            <div ref={formRef} className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                        <div className="bg-customBlue py-6 px-8">
                            <h2 className="text-2xl font-bold text-white text-center">Demande d'ouverture de compte vendeur</h2>
                            <p className="text-blue-100 text-center mt-2">Remplissez ce formulaire et nous vous contacterons sous 24h.</p>
                        </div>

                        <div className="p-8">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Demande envoyée avec succès !</h3>
                                    <p className="text-gray-600 mb-8">
                                        Merci de votre intérêt pour Fama Mobil. Notre équipe va examiner votre demande et vous recontactera très prochainement par email.
                                    </p>
                                    <Link to="/" className="text-customBlue font-medium hover:underline">
                                        Retour à l'accueil
                                    </Link>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input required type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customBlue focus:border-transparent" placeholder="Votre prénom" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input required type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customBlue focus:border-transparent" placeholder="Votre nom" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email professionnel</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <input required type="email" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customBlue focus:border-transparent" placeholder="contact@votre-entreprise.com" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <input required type="tel" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customBlue focus:border-transparent" placeholder="+509 ..." />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Nom de la structure</label>
                                            <div className="relative">
                                                <Store className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input required type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customBlue focus:border-transparent" placeholder="Pharmacie Centrale..." />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Type d'activité</label>
                                            <div className="relative">
                                                <select className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customBlue focus:border-transparent bg-white">
                                                    <option>Pharmacie</option>
                                                    <option>Laboratoire</option>
                                                    <option>Fournisseur de matériel médical</option>
                                                    <option>Autre</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Adresse (Numéro et Rue)</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <input required type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customBlue focus:border-transparent" placeholder="123 Rue de la République" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                                            <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customBlue focus:border-transparent" placeholder="Port-au-Prince" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Département</label>
                                            <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customBlue focus:border-transparent" placeholder="Ouest" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Code Postal</label>
                                            <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customBlue focus:border-transparent" placeholder="HT6110" />
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full bg-customGreen hover:bg-green-700 text-white font-bold py-3 rounded-lg text-lg transition-colors shadow-md mt-4">
                                        Envoyer ma demande
                                    </button>
                                    <p className="text-xs text-gray-500 text-center mt-4">
                                        En soumettant ce formulaire, vous acceptez nos conditions générales d'utilisation pour les vendeurs partenaires.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomePartner;

