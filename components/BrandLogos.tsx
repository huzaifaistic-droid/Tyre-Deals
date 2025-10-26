import React from 'react';

interface LogoProps {
    className?: string;
}

// Note: These are simplified representations for demonstration purposes.

export const MichelinLogo: React.FC<LogoProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="40" fontFamily="Poppins, sans-serif" fontSize="38" fontWeight="800">MICHELIN</text>
    </svg>
);

export const GoodyearLogo: React.FC<LogoProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <text x="10" y="40" fontFamily="Impact, sans-serif" fontSize="40" fontStyle="italic">GOOD YEAR</text>
    </svg>
);

export const BridgestoneLogo: React.FC<LogoProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 240 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="40" fontFamily="Poppins, sans-serif" fontSize="35" fontWeight="700">BRIDGESTONE</text>
    </svg>
);

export const PirelliLogo: React.FC<LogoProps> = ({ className }) => (
     <svg className={className} viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="40" fontFamily="Poppins, sans-serif" fontSize="40" fontWeight="600">PIRELLI</text>
    </svg>
);

export const ContinentalLogo: React.FC<LogoProps> = ({ className }) => (
     <svg className={className} viewBox="0 0 220 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="40" fontFamily="Poppins, sans-serif" fontSize="32" fontWeight="600">Continental</text>
    </svg>
);

export const HankookLogo: React.FC<LogoProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="40" fontFamily="Poppins, sans-serif" fontSize="40" fontWeight="700">HANKOOK</text>
    </svg>
);

export const YokohamaLogo: React.FC<LogoProps> = ({ className }) => (
     <svg className={className} viewBox="0 0 220 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="40" fontFamily="Poppins, sans-serif" fontSize="35" fontWeight="700">YOKOHAMA</text>
    </svg>
);

export const BFGoodrichLogo: React.FC<LogoProps> = ({ className }) => (
     <svg className={className} viewBox="0 0 220 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="40" fontFamily="Poppins, sans-serif" fontSize="35" fontWeight="700">BFGoodrich</text>
    </svg>
);