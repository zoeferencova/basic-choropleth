import { SmallButton } from './SmallButton'

export const LinkBar = () => {
    return (
        <div className='link-bar'>
            <SmallButton text='Github' link='https://github.com/zoeferencova/iris-scatterplot' icon='github' />
            <SmallButton text='Data source' link='https://archive.ics.uci.edu/ml/datasets/Iris' icon='table-regular' />
        </div>
    )
};
