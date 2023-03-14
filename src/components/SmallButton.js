export const SmallButton = ({ text, link, icon }) => {
    return (
        <a className='small-button' href={link} target='_blank' rel='noreferrer'>
            <button><img alt={icon} src={require(`../../public/icons/${icon}.svg`)} />{text}</button>
        </a>
    )
};
