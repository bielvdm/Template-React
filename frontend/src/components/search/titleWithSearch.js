import lupa from '../assets/img/Icon awesome-search.svg'
import chevron from '../assets/img/Icon awesome-chevron-left.svg'
import './search.css'
import { Link } from 'react-router-dom'

export function TitleWithSearch(props) {
    return (
        <div className='search-componente'>
            <Link style={props.chevron ? { visibility: 'visible' } : { visibility: 'hidden' }} to={props.route}><img className='chevron-title-with-search' src={chevron} alt='chevron' /></Link>
            <div>
                <h1 className='montserrat azul w600'>{props.title}</h1>
                <p className='montserrat preto'>{props.label}</p>
                <div className='estrututra-title'>
                    <div className='content-input-search'>
                        <img src={lupa} alt='lupa' />
                        <input onChange={props.onChange} className='montserrat' type='text' placeholder={props.placeholder} />
                    </div>
                    <button onClick={props.onClick} className='montserrat' style={props.botao ? { display: 'flex', fontSize: props.fontSizeButton } : { display: 'none' }}>
                        <img style={props.iconButton ? { marginRight: 10, display: 'flex' } : { display: 'none' }} src={props.iconButton} alt='icon plus' />
                        {props.labelButton}
                    </button>
                </div>
            </div>
        </div>
    )
}