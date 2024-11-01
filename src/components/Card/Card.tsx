import React from 'react'; 
import cn from 'classnames'; 
import '../../styles/variables.css';
import '../../styles/styles.css'
import './Card.css'; 
import Text from '../Text'; 
export type CardProps = { 
  /** Дополнительный classname */ 
  className?: string; 
  /** URL изображения */ 
  image: string; 
  /** Слот над заголовком */ 
  captionSlot?: React.ReactNode; 
  /** Заголовок карточки */ 
  title: React.ReactNode; 
  /** Описание карточки */ 
  subtitle: React.ReactNode; 
  /** Содержимое карточки (футер/боковая часть), может быть пустым */ 
  contentSlot?: React.ReactNode; 
  /** Клик на карточку */ 
  onClick?: React.MouseEventHandler; 
  /** Слот для действия */ 
  actionSlot?: React.ReactNode; 
}; 
 
const Card: React.FC<CardProps> = ({ 
  className, 
  image, 
  captionSlot, 
  title, 
  subtitle, 
  contentSlot, 
  actionSlot, 
  onClick
}) => { 
  return ( 
    <div className={cn(className, 'card')} onClick={onClick}> 
      <div className="card__header"> 
        <img className="card__image" src={image} alt="card" /> 
      </div> 
      <div className="card__body"> 
        {captionSlot && ( 
          <Text 
            className="card__caption" 
            view="p-14" 
            weight="medium" 
            color="secondary" 
          > 
            {captionSlot} 
          </Text> 
        )} 
        <Text tag="h4" view="p-20" weight="medium" color="primary" maxLines={2}> 
          {title} 
        </Text> 
        <Text 
          className="card__subtitle" 
          view="p-16" 
          color="secondary" 
          maxLines={3} 
        > 
          {subtitle} 
        </Text> 
        <div className="card__footer"> 
          {contentSlot && ( 
            <Text className="card__content" view="p-18" weight="bold"> 
              {contentSlot} 
            </Text> 
          )} 
          <div className="card__action">{actionSlot}</div> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default Card;