import logo from '../assets/logo.png'

export default function Logo(props) {

    return <img src={logo} alt="logo" style={{width: `${props.width}`}} />

}