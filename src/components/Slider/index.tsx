import SlickSlider from 'react-slick';

import { Settings } from 'react-slick';
import { useLanguage } from '../../hooks/useLanguage';
import { NextArrow } from './NextArrow';
import { PrevArrow } from './PrevArrow';
import { SliderItem } from './SliderItem';

import { Container } from './styles';

export function Slider() {
  const settings: Settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    className: 'center',
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { language } = useLanguage();

  const isEnglish = language === 'en';
  if (isEnglish)
  {
  return (
    <Container id="slider">
      <h2>{isEnglish ? 'Who we are?' : 'Quem somos?'}</h2>

      <SlickSlider {...settings}>
       <SliderItem 
          imageSource="assets/images/Mart-susi.jpg"
          title="Mart Susi"
          description="Mart's quest for bridging the gap between Human Rights and Technology is key to the IBFs values. He is Human Rights Professor at Tallinn University, as well as coordinator of the Global Digital Human Rights Network."
          linkedInUrl="https://www.linkedin.com/in/mart-susi-5971b3207/"
          portfolioUrl="https://www.linkedin.com/in/mart-susi-5971b3207/"
        />
        <SliderItem
          imageSource="https://media-exp3.licdn.com/dms/image/C4D03AQGRVrKHeoYn8g/profile-displayphoto-shrink_200_200/0/1603903071556?e=1631145600&v=beta&t=ioMar4w_jadHEL7Y0xrMreQdxCqAdwNHYHasKk3wANg"
          title="Thomas Palmeira Ferraz"
          description="Passionate AI Researcher and Machine Learning Engineer who believes that the technology exists to generate a positive impact on the world and solve the problems of society."
          linkedInUrl="https://www.linkedin.com/in/thomasferraz/"
          portfolioUrl="https://github.com/thomas-ferraz"
        />

        <SliderItem 
          imageSource="https://media-exp3.licdn.com/dms/image/C4D03AQGLZNyKw2aPSg/profile-displayphoto-shrink_200_200/0/1619876858238?e=1631145600&v=beta&t=Lr2TbLkGcaiG8BX6UC-LJm--_iNpTaSVsEZDaThkCd0"
          title="Maria Fernanda Ribeiro"
          description="Electrical Engineer graduated at POLI-USP and Data Scientist, she believes that technology must be always used in favor of people and society"
          linkedInUrl="https://www.linkedin.com/in/maria-fernanda-ribeiro-mfr95/"
        />

        <SliderItem 
          imageSource="https://media-exp3.licdn.com/dms/image/C4D03AQFb8bSggFCxJQ/profile-displayphoto-shrink_200_200/0/1566580951581?e=1631145600&v=beta&t=XaUiONf0Lv-LXNXh0jryi6gVElmzqy7rVn3kk1HFzGk"
          title="Gabriel Goes Braga Takayanagi"
          description="Student in Electrical engineering, he has a love learning new concepts and understanding the world that surrounds us. Recently, with the IBRA project he has been able to make use of my passion and knowledge of Data Science to make meaningful changes in the world."
          linkedInUrl="https://www.linkedin.com/in/gabriel-takayanagi/"
        />

        <SliderItem 
          imageSource="assets/images/Caio-henrique.png"
          title="Caio Henrique Dias Duarte"
          description="Caio is a long-term research in comparative legislation and philosophy of law. This interest of his materialized in the IBF, and he is keen to help apply legal principles to fruitful costumer relations."
          linkedInUrl="https://www.linkedin.com/in/caio-henrique-dias-duarte-101aa2115/"
          portfolioUrl="https://www.linkedin.com/in/caio-henrique-dias-duarte-101aa2115/"
        />
         

        <SliderItem 
          imageSource="https://media-exp3.licdn.com/dms/image/C5103AQFUrgJJ1X83AQ/profile-displayphoto-shrink_200_200/0/1517521355286?e=1631145600&v=beta&t=4gJ_aZqX27iGUkrFbCKU7ouAf85n1w1vmrlQYG4xes8"
          title="Roseli Lopes"
          description="Roseli has a decades long experience with technology and education. One of LATAMs leading experts in the field, she is a Professor at the Integrable Systems Lab of the University of S??o Paulo."
          linkedInUrl="https://www.linkedin.com/in/roseli-lopes-591324117/"
          portfolioUrl="https://www.linkedin.com/in/roseli-lopes-591324117/"
        /> 
      </SlickSlider>
    </Container>
  );
}
else
{
  return (
    <Container id="slider">
      <h2>{isEnglish ? 'Who we are?' : 'Quem somos?'}</h2>

      <SlickSlider {...settings}>
        <SliderItem 
          imageSource="assets/images/Mart-susi.jpg"
          title="Mart Susi"
          description="O interesse de Mart por direitos humanos e tecnologia ?? a principal motiva????o da IBRA. Ele ?? professor de Direitos Humanos na Universidade de Tallinn e coordenador da Global Digital Human Rights Network."
          linkedInUrl="https://www.linkedin.com/in/mart-susi-5971b3207/"
          portfolioUrl="https://www.linkedin.com/in/mart-susi-5971b3207/"
        />
        <SliderItem
          imageSource="https://media-exp3.licdn.com/dms/image/C4D03AQGRVrKHeoYn8g/profile-displayphoto-shrink_200_200/0/1603903071556?e=1631145600&v=beta&t=ioMar4w_jadHEL7Y0xrMreQdxCqAdwNHYHasKk3wANg"
          title="Thomas Palmeira Ferraz"
          description="Pesquisador de intelig??ncia artificial e Engenheiro de Machine Learning que acredita que a tecnologia existe para gerar um impacto positivo para o mundo e resolver os problemas da sociedade."
          linkedInUrl="https://www.linkedin.com/in/thomasferraz/"
          portfolioUrl="https://github.com/thomas-ferraz"
        />

        <SliderItem 
          imageSource="https://media-exp3.licdn.com/dms/image/C4D03AQGLZNyKw2aPSg/profile-displayphoto-shrink_200_200/0/1619876858238?e=1631145600&v=beta&t=Lr2TbLkGcaiG8BX6UC-LJm--_iNpTaSVsEZDaThkCd0"
          title="Maria Fernanda Ribeiro"
          description="Formada em engenharia el??trica pela POLI-USP, trabalha atualmente como Data Scientist e acredita que a tecnologia deve sempre ser usada a favor como um todo."
          linkedInUrl="https://www.linkedin.com/in/maria-fernanda-ribeiro-mfr95/"
        />

        <SliderItem 
          imageSource="https://media-exp3.licdn.com/dms/image/C4D03AQFb8bSggFCxJQ/profile-displayphoto-shrink_200_200/0/1566580951581?e=1631145600&v=beta&t=XaUiONf0Lv-LXNXh0jryi6gVElmzqy7rVn3kk1HFzGk"
          title="Gabriel Goes Braga Takayanagi"
          description="Estudante de engenharia el??trica, est?? sempre buscando aprender novos conceitos e entender o mundo a nossa volta. Recentemente, com a IBRA ele encontrou a oportunidade de utilizar sua paix??o e conhecimento de Data Science para impactar e provocar mudan??a no mundo."
          linkedInUrl="https://www.linkedin.com/in/gabriel-takayanagi/"
        />

        <SliderItem 
          imageSource="assets/images/Caio-henrique.png"
          title="Caio Henrique Dias Duarte"
          description="Caio ?? um pesquisador de longa data em legisla????o comparada e filosofia do direito. Esse interesse se materializou na IBRA, aplicando princ??pios do direito para beneficiar as rela????es com os usu??rios."
          linkedInUrl="https://www.linkedin.com/in/caio-henrique-dias-duarte-101aa2115/"
          portfolioUrl="https://www.linkedin.com/in/caio-henrique-dias-duarte-101aa2115/"
        />
        

        <SliderItem 
          imageSource="https://media-exp3.licdn.com/dms/image/C5103AQFUrgJJ1X83AQ/profile-displayphoto-shrink_200_200/0/1517521355286?e=1631145600&v=beta&t=4gJ_aZqX27iGUkrFbCKU7ouAf85n1w1vmrlQYG4xes8"
          title="Roseli Lopes"
          description="Roseli tem d??cadas de experi??ncia com tecnologia e educa????o. Uma das maiores especialistas no tema na Am??rica Latina, ela ?? Professora no Laborat??rio de Sistemas Integr??veis da POLI USP."
          linkedInUrl="https://www.linkedin.com/in/roseli-lopes-591324117/"
          portfolioUrl="https://www.linkedin.com/in/roseli-lopes-591324117/"
        /> */}
      </SlickSlider>
    </Container>
  );
}




}

/* <SliderItem
  imageSource="url da imagem"
  title="nome da pessoa"
  description="breve descri????o"
  linkedInUrl="url do perfil do linkedin"
  portfolioUrl="url do seu portfolio"
/> 

  ATALHO VSCODE - CTRL + ESPA??O
*/