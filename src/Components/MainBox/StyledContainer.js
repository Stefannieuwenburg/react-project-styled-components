import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 500px;
    padding: 50px;
    color: yellow;
    background: blue;
`;

const Paragraph = () => (
    <Container>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
    </Container>
);


const StyledContainer = () => {
    return (
        <div>
            <Paragraph />
        </div>
    );
}

export default StyledContainer;




