import {
  Card,
  CardDesc,
  CardTitle,
  GridContainer,
  MainDiv,
  MainTitle,
  MainDesc,
  Container,
} from "./MainPage.elements";
import Link from "next/link";

function MainPage() {
  return (
    <Container>
      <MainDiv>
        <MainTitle>Intelpik</MainTitle>
        <MainDesc>Build your projects with us</MainDesc>

        <GridContainer>
          <Card>
            <Link href="https://www.intelpik.com/">
              <a target="_blank">
                <CardTitle>Visit our website</CardTitle>
                <CardDesc>Connect with us</CardDesc>
              </a>
            </Link>
          </Card>

          <Card>
            <Link href="https://www.intelpik.com/hire-us.html">
              <a target="_blank">
                <CardTitle>Hire Us</CardTitle>
                <CardDesc>Crafting your dreams</CardDesc>
              </a>
            </Link>
          </Card>

          <Card>
            <Link href="https://www.intelpik.com/index.html#contact">
              <a target="_blank">
                <CardTitle>Talk with us</CardTitle>
                <CardDesc>Get in touch with us</CardDesc>
              </a>
            </Link>
          </Card>
        </GridContainer>
      </MainDiv>
    </Container>
  );
}

export default MainPage;
