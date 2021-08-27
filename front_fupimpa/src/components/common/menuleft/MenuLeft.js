import '../colors/colors.css';
import './menuleft.css';

export function MenuLeft(){
    return(
        <div className="menu-left">
            <MenuLeftButton colorBack="laranja" label="Algorítmo"></MenuLeftButton>
            <MenuLeftButton colorBack="vermelho" label="Expressões"></MenuLeftButton>
            <MenuLeftButton colorBack="verde" label="Funções"></MenuLeftButton>
            <MenuLeftButton colorBack="verde" label="Controle de fluxo"></MenuLeftButton>

        </div>
    );
}

export function MenuLeftButton(props){
    let classes = "menu-left-button preto back-" + props.colorBack;
    return(
        <div className={classes}>
            {props.label}
        </div>
    );
}
