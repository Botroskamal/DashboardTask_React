import './Head.scss'

const Head = (props) => {
    return (
        <div className='head'>
            <div>
                <img src={props.img} alt='icon' />
            </div>
            <span>Motiv.</span>
        </div>
    );
}

export default Head;