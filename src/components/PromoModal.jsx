import styled from 'styled-components'
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom'

const PromoModal = ({ closeModal }) => {

    return (
        <Wrapper className="promo-modal">
            <button type='button' className='close-btn' onClick={closeModal}>
                <IoClose />
            </button>
            <div>
                <h1>🎉 Join Our Raffle Draw and Win Big! 🎉</h1>

                <p>At CozyNook Furniture, we love giving back to our amazing customers, and what better way to do that than with an exciting raffle draw! You have the chance to win fabulous prizes, including the latest iPhone 15 Pro and Apple AirPods, among other fantastic rewards.</p>

                <p>Every purchase you make at CozyNook Furniture automatically enters you into our raffle draw. The more purchases you make, the more entries you get, increasing your chances of winning!</p>
                <Link to="/promo" className='btn' onClick={closeModal}>Win Big Today!</Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
position: absolute;
padding: 16px 20px 32px;
background: var(--clr-cns-neutral);
border-radius: 16px;
z-index: 100;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 100%;
max-width: 575px;

.close-btn {
    border: none;
    outline: none:
    background: none;
    cursor: pointer;
    font-size: 24px;
    float: right;
}
h1 {
    font-size: 20px;
    color: var(--clr-cns-primary);
    text-align: center;
    margin-top: 32px;
}
p {
    font-size: 16px;
    font-weight: 600;
    color: var(--clr-cns-primary);
    text-align: center;
    margin-top: 16px;
}
.btn {
    display: table;
    margin-inline: auto;
    margin-top: 40px;
}
`

export default PromoModal