import "../index.css";

const SubPageHeader = ({ imagePath, title, subtitle }) => {
    return (
        <>
            <div className="sub-page-header">
                <img src={imagePath} alt={title} className="sub-header-bg" />
                <div className="sub-header-overlay" />
                <div className="sub-header-content">
                    <h1 className="sub-header-title">{title}</h1>
                    {subtitle && <p className="sub-header-subtitle">{subtitle}</p>}
                </div>
            </div>
        </>
    );
};

export default SubPageHeader;
