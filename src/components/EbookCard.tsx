import React from 'react';

interface EbookCardProps {
    title: string;
    author: string;
    description: string;
    imageUrl: string;
}

const EbookCard: React.FC<EbookCardProps> = ({ title, author, description, imageUrl }) => {
    return (
        <div className="ebook-card">
            <img src={imageUrl} alt={title} className="ebook-image" />
            <h3 className="ebook-title">{title}</h3>
            <p className="ebook-author">{author}</p>
            <p className="ebook-description">{description}</p>
        </div>
    );
};

export default EbookCard;