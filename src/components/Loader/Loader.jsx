import { MagnifyingGlass } from 'react-loader-spinner';
import { Loader } from './Loader.styled';

export const ImageLoader = () => {
    return (
        <Loader>
        <MagnifyingGlass
        visible={true}
        height="120"
        width="120"
        ariaLabel="MagnifyingGlass-loading"
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#ecf4f7'
        color = '#3f51b5'
        />
        </Loader>
    )
}