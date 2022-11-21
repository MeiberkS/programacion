import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Java sirve para crear aplicaciones y para definir procesos en una amplia cantidad de dispositivos.
          Su programación se orienta principalmente a objetos. Permitiendo ejecutar un mismo programa en diferentes sistemas
          operativos y dispositivos.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require ('../images/img-9.jpg')}
              text='La Programación Orientada a Objetos (POO) es un paradigma de programación, 
                    es decir, un modelo o un estilo de programación que nos da unas guías sobre cómo trabajar con él.
                    Se basa en el concepto de clases y objetos. Este tipo de programación se utiliza para estructurar un programa
                    de software en piezas simples y reutilizables de planos de código (clases) para crear instancias individuales
                    de objetos. '
              label='JAVA FOR NOOBS'
              path=''
            />
            <CardItem
              src='images/img-2.jpg'
              text='La programación como herramienta educativa en la actualidad parte de LOGO, un lenguaje creado en los 60 y 70.
                    Aquel LOGO fue la semilla de lo que más tarde, ya en los años 90, germinó en forma de múltiples herramientas destinadas 
                    a la educación y formación de la programación de niños y jóvenes, ya sean en forma de lenguajes específicos o de juguetes,
                    como LEGO Mindstorms, que fue un desarrollo de LEGO junto con el MIT. Empezó a entreverse la importancia de la 
                    programación como una herramienta para divertirse y también para aprender ciertos conceptos relacionados con el
                    pensamiento computacional.'
              label='JAVA FOR NOOBS'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='¿Pero por qué aprender a programar?
                    Todos coincidimos en que el pensamiento computacional es el concepto clave de esta materia. La forma de pensar, de aprender 
                    a solucionar problemas y crear algoritmos y soluciones, tanto particulares como - sobre todo - generales a esos problemas.
                    Los informáticos tenemos claro cuál es este concepto que nos permite, por ejemplo, tener un problema de cierta envergadura 
                    frente a nosotros, y saber dividirlo y resolver cada una de las partes, generalizando esta solución.'
              label='JAVA FOR NOOBS'
              path=''
            />
            <CardItem
              src='images/img-4.jpg'
              text='La mejor plataforma para introducirse en la programación es Code.org, una organización sin ánimo de lucro
                    con la que han colaborado algunas de las principales estrellas del panorama tecnológico en Estados Unidos, y que cuenta
                    con el apoyo de las principales empresas del sector. Ofrece múltiples tutoriales y cursos online completamente 
                    gratuitos, entre los que es necesario destacar dos de ellos:'
              label='JAVA FOR NOOBS'
              path=''
            />
            <CardItem
              src='images/img-8.jpg'
              text='Lógica es la técnica utilizada para desarrollar instrucciones en una secuencia para lograr determinado objetivo.

              Es la organización y planificación de instrucciones en un algoritmo, con el objetivo de tornar visible la implementación de un programa o software.
              
              La lógica de la programación es la organización coherente de las instrucciones del programa para que su objetivo sea alcanzado.'

              label='JAVA FOR NOOBS'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
