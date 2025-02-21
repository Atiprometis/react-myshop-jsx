import PropTypes from 'prop-types';

function Image({imageURL}) {
    return ( 
        <>
        <img src={imageURL} width="200px" />
        </>
     );
}

export default Image;

Image.propTypes  = {
    imageURL: PropTypes.string
}