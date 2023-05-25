import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import imgGaleria1 from '../../img/g1.jpg';
import imgGaleria2 from '../../img/g2.jpg';
import imgGaleria3 from '../../img/g3.jpg';
import imgGaleria4 from '../../img/g4.jpg';
import imgGaleria5 from '../../img/g5.jpg';
import imgGaleria6 from '../../img/g6.jpg';
import imgGaleria7 from '../../img/g7.jpg';
import style from '../../styles/Inicio.module.css';


export const Galeria = () => {
    const [indexImgGaleria, setIndexImgGaleria] = useState(0);
    const [modalImgGaleria, setModalImgGaleria] = useState(false);

    const imagenesGaleria = [imgGaleria1, imgGaleria2, imgGaleria3, imgGaleria4, imgGaleria5, imgGaleria6, imgGaleria7];

    const handleOpenModal = (e) => {
        const indexGaleria = e.target.childNodes[0].src.slice('-15');
        setIndexImgGaleria(imagenesGaleria.indexOf(indexGaleria));
        setModalImgGaleria(true);
    }

    const handleCloseModal = () => {
        setModalImgGaleria(false);
    }

  return (
    <>
        {modalImgGaleria &&
            <div className={style.fullImgBG}>
                <FontAwesomeIcon icon={faCircleXmark} className= {style.btnCerrar} onClick={handleCloseModal}/>
                <div className={style.fullScreemImgGaleria}>
                    <img src={imagenesGaleria[indexImgGaleria]}/>
                </div>
            </div>            
        }

        <div className='mt-7 mb-3 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8 lg:grid-cols-4 lg:mb-8'>
            <div 
                className={`${style.galeriaBefore} row-start-1 row-span-3 md:row-start-2 md:row-end-4 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-3`}
                onClick={(e) => handleOpenModal(e)}
            >
                <img className='object-cover h-[23rem] md:h-60 lg:h-[32rem] lg:w-[46rem] hover:after:content-[""] hover:after' src={imagenesGaleria[0]} alt='foto galeria uno'/>
            </div>
            <div 
                className={`${style.galeriaBefore} md:col-start-1 md:col-end-4 lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2`}
                onClick={(e) => handleOpenModal(e)}
            >
                <img className='object-cover h-28 md:w-[33rem] lg:h-60' src={imagenesGaleria[1]} alt='foto galeria dos'/>
            </div>
            <div 
                className={`${style.galeriaBefore} col-start-2 col-end-3 row-start-2 row-end-3 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3`} 
                onClick={(e) => handleOpenModal(e)}
            >
                <img className='object-cover h-28 md:h-60' src={imagenesGaleria[2]} alt='foto galeria tres'/>
            </div>
            <div 
                className={`${style.galeriaBefore} col-start-2 col-end-3 row-start-3 row-end-4 md:row-start-2 md:row-end-3 lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3`}
                onClick={(e) => handleOpenModal(e)}
            >
                <img className='object-cover h-28 lg:h-60' src={imagenesGaleria[3]} alt='foto galeria cuatro'/>
            </div>
            <div 
                className={`${style.galeriaBefore} lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2`}
                onClick={(e) => handleOpenModal(e)}
            >
                <img className='object-cover h-28 lg:h-60' src={imagenesGaleria[4]} alt='foto galeria cuatro'/>
            </div>
            <div 
                className={`${style.galeriaBefore} md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-4 lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4`}
                onClick={(e) => handleOpenModal(e)}
            >
                <img className='object-cover h-28 md:w-96 lg:h-60 lg:w-[46rem]' src={imagenesGaleria[5]} alt='foto galeria cuatro'/>
            </div>
            <div 
                className={`${style.galeriaBefore} col-start-1 col-end-3 md:col-start-4 md:col-end-5 md:row-start-3 md:row-end-4 lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-4`}
                onClick={(e) => handleOpenModal(e)}
            >
                <img className='object-cover h-28 w-96 lg:h-60 lg:w-[46rem]' src={imagenesGaleria[6]} alt='foto galeria cuatro'/>
            </div>
        </div>        
    </>
  )
}
