import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: black;
`;

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.black};
    font-size: 22px;
`;
export const ButtonContainer = styled.View`
flex-direction: row;
margin-bottom: 5px;
width: 100%;
`;

export const ButtonSpacer = styled.View`
  width: 1px;
`;

export const Button = styled.Button``;