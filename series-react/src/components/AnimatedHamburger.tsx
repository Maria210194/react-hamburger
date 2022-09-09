import React, { useState } from 'react';
import classNames from 'classnames';

export interface Item {
    id: number;
    icon: string;
    url: string;
}

interface AnimatedHamburgerProps {
    items: Item[];
    onIconClick: (url: string) => void;
}

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = (props) => {

// faccio il destructuring dall'array per estrapolare proprietà
// il primo parametro è lo stato attuale
const [opened, setOpened] = useState<boolean>(false); 

const iconClickHandler= (url: string) => {
    console.log(url)
    // window.open(url);
    // setOpened(false)
    props.onIconClick(url);
  }

  // il primo parametro è la classe opened e il secondo è il nostro stato
  // avrei anche potuto scriverlo direttamente nel div senza creare la costante
  const openClass = classNames('menu-open', {'opened': opened })

    return( 
        <nav className="menu">
            <div className={openClass}/>
            {/* <label className="menu-open-button" onMouseOver={()=> setOpened(true)} onMouseOut={()=> setOpened(false)}>  */}
            <label className="menu-open-button" onClick={()=> setOpened(!opened)}>
                <span className="hamburger hamburger-1" />
                <span className="hamburger hamburger-2" />          
                <span className="hamburger hamburger-3" />
            </label>
            
            {
            props.items.map(item => {
                return(
                <div 
                className="menu-item" 
                key={item.id}
                onClick={()=>iconClickHandler(item.url)}> 
                    <i className={item.icon} />
                </div>
                )
            })
            }
      </nav>
    )
};