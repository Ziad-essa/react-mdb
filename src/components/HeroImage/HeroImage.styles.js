import styled from "styled-components";


export const Wrapper = styled.div`
    
    background-color:red;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    height:560px;
    position:relative;
    animation:animateHeroImage 1s;
    
    @keyframes animateHeroImage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }


`;

export const Content = styled.div`
    padding :20px ;
    max-width:var(--maxWidth);
    margin:0 auto ;
`;

export const Text = styled.div` 
    z-index:100;
    max-width:700px;
    position:absolute;
    bottom:40px;
    margin-right:20px;
    min-height:100px;
    

    h1{
        font-size: var(--fontSuperBig);
        @media (max-width:720px){
            font-size: var(--fontBig);
        }
    }
    p{
        font-size:var(--fontMed);
        @media (max-width:720px){
            font-size: var(--fontSmall);
        }
    }
    @media (max-width:720px){
            max-width:100%
        }

`;
