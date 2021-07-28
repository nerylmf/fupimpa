import '../colors/colors.css';
import './menuleft.css';

export function MenuLeft(){
    return(
        <div className="menu-left">
            <MenuLeftButton colorBack="laranja" label="Algorítmo"></MenuLeftButton>
            <MenuLeftButton colorBack="vermelho" label="OPA"></MenuLeftButton>
            <MenuLeftButton colorBack="verde" label="OPINHA"></MenuLeftButton>

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