import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.black};
    font-size: 22px;
`;

export const Button = styled.Button``;