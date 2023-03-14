import { SmallButton } from './SmallButton'

export const LinkBar = () => {
    return (
        <div className='link-bar'>
            <SmallButton text='Github' link='https://github.com/zoeferencova/basic-choropleth' icon='github' />
            <SmallButton text='Data source' link='https://ourworldindata.org/hiv-aids' icon='table-regular' />
        </div>
    )
};
