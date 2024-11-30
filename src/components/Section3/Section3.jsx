import PropTypes from 'prop-types';
import fondo from '../../assets/fond.png'

// eslint-disable-next-line no-unused-vars
function Section3 ({language}) {
    return (
        <section id="section3" className='bg-yellow-200 p-36 md:flex md:items-center md:justify-between m-0 p-0 box-border'>
            <div id="container" className='bg-red-200 w-full flex m-auto'>
                <div id="card" className=' w-full m-auto p-5 mt-5 text-center text-gray-600t'>
                    <figure className='bg-teal-500 text-white'>
                        <img src={fondo} alt="" className='w-full h-56'/>
                    </figure>
                    <div className='p-4 text-center'>
                        <h3 className='mb-4 text-gray-600'>TITLE</h3>
                        <p className='text-gray-700 text-sm mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam excepturi accusamus esse ea, officiis magni magnam consectetur, cumque obcaecati deleniti, eos nihil aperiam unde doloribus voluptatem. Impedit totam at voluptatibus!</p>
                        <a href="" className='inline-block p-2 mt-2 no-underline text-teal-500 rounded mb-1'>Leer Mas</a>
                    </div>
                </div>
            </div>

        </section>
        
    )
}

// Validación de las props
Section3.propTypes = {
    language: PropTypes.string.isRequired,
    toggleLanguage: PropTypes.func.isRequired,
};

export default Section3

