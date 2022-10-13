import React from 'react'
import AccordionSomeQuestion from './accordionSomeQuesiton'
import "./someQuestion.css"

const SomeQuestion = () => {
  return (
    <div className='some-question'>

        <div className='some-question__left'>
             <p  className='normal-text'><span style={{fontSize:"24px", width:"140%"}}>Have some questions?</span></p>
             <div className='some-question__left__line'></div>
             <AccordionSomeQuestion/>
        </div>
        
        <div className='some-question__right'>
          
            <div className='some-question__right__images'>
                 <img data-aos="new-animation" data-aos-duration="1100" data-aos-delay="500" className='some-question__right__images__image' src='https://i.im.ge/2022/09/20/1DOLSJ.4.png' />
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="900"  className='some-question__right__images__image' src='https://i.im.ge/2022/09/20/1DOtdh.10.png' />
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="600"  className='some-question__right__images__image' src='https://i.im.ge/2022/09/20/1DOmMK.7.png' />
                 <img data-aos="new-animation" data-aos-duration="1800" data-aos-delay="700"  className='some-question__right__images__image' src='https://i.im.ge/2022/09/20/1DO6xX.9.jpg' />
                
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="800"  className='some-question__right__images__image' src='https://i.im.ge/2022/09/20/1DO556.6.jpg' />
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="300"  className='some-question__right__images__image' src='https://i.im.ge/2022/09/20/1DOhfS.2.png' />
                 <img data-aos="new-animation" data-aos-duration="1300" data-aos-delay="400"  className='some-question__right__images__image' src='https://i.im.ge/2022/09/20/1DOAfY.12.png' />
                 <img data-aos="new-animation" data-aos-duration="1200" data-aos-delay="600"  className='some-question__right__images__image' src='https://i.im.ge/2022/09/20/1DODJa.3.jpg' />
                
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="300"  className='some-question__right__images__image' src='https://i.im.ge/2022/09/20/1DOwI9.8.jpg' />
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="500"  className='some-question__right__images__image' src='https://i.im.ge/2022/09/20/1DOUNy.1.jpg' />
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="600"  className='some-question__right__images__image' src='https://i.im.ge/2022/09/20/1DO7Ex.5.jpg' />
                 <img data-aos="new-animation" data-aos-duration="500" data-aos-delay="900"  className='some-question__right__images__image' src='https://i.im.ge/2022/09/20/1DOyPM.11.jpg' />
            </div>

            <p className='some-question__right__text'> You are in good hands. We are a team of 80+ US board-certified radiologists specializing in breast cancer diagnosis. </p>


        </div>



    </div>
        
  )
}

export default SomeQuestion