import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 0.5rem;
  background:#000;
  color:#fff;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  user-select: none;
`

export const MainDiv = styled.div`
  padding: 5rem 0;
   display:grid;
   place-content: center;
`

export const MainTitle = styled.h1`
   color: #0070f3;
   text-decoration: none;
   margin: 0;
   line-height: 1.15;
   letter-spacing:1.5px;
   font-size: 3rem;
   text-align: center;
  
`
export const MainDesc = styled.p`
   line-height: 1.5;
   letter-spacing:1px;
   font-size: 1rem;
   text-align: center;
`

export const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width:100%;
    flex-direction: column;
  }

`

export const Card = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  text-align: center;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  min-width: 45%;
  cursor: pointer;
  user-select: none;


  :hover,
  :focus,
  :active {
  color: #0070f3;
  border-color: #0070f3;
}
  
  @media (max-width: 600px) {
    min-width:100%;
    flex-direction: column;
    margin-bottom:2rem;
  }

`

export const CardTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight:600;
  letter-spacing:.8px;
`

export const CardDesc = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
`