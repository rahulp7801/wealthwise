import React from 'react';
import styles from 'assets/scss/NewsCard.module.css';

function NewsCard({ imageUrl, header, paragraph, link }) {
    return (
        <div className={styles.divHeaderContent}>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={imageUrl} alt="news" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                <h2 style={{ marginTop: '16px' }}>{header}</h2>
                <p>{paragraph}</p>
            </a>
        </div>
    );
}

export default NewsCard;