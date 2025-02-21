
import PropTypes from 'prop-types';
function Checkbox({text,isCheck}) {
    let resText = ''
    if (isCheck){
        resText = (
            <div>
                { text} is done
            </div>
        )
    }else{
        resText = (
            <div>
                { text} is no
            </div>
        )
    }
    return ( 
        <>
        ({ resText})
        </>
     );
}

export default Checkbox;

Checkbox.propTypes ={
    text: PropTypes.string,
    isCheck: PropTypes.bool,
}
