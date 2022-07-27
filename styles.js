import React from 'react';
import styled from 'styled-components';

export const Container  = styled.View`
flex: 1;
background-color: #fff;
`;

export const AreaHeader = styled.View`
height: 20%;
background-color: #820ad1;
padding-left: 7%;
padding-right: 7%;
`;

export const AreaIcons = styled.View`
flex-direction: row;
justify-content: space-between;

align-items: center;
height: 55%;
`;

export const AreaIconsPerson = styled.View`
background-color: #8257d1;
justify-content: center;
align-items: center;
padding: 3%;
border-radius: 25px;
`;

export const AreaIconsDireita = styled.View`
flex-direction: row;
justify-content: space-around;
`;

export const AreaUser = styled.View`
`;

export const TouchIcon = styled.TouchableOpacity`
padding-left: 5%;
`;

export const TouchIconPerson = styled.TouchableOpacity``;

export const AreaConta = styled.View`
margin-left: 7%;
margin-right: 7%;
height: 10%;
`;

export const AreaContaText = styled.View`
height: 40%;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 5%;
`;

export const ValorConta = styled.Text`
font-size: 20px;
font-weight: bold;
padding-top: 2%;
justify-content: center;
align-items: center;
`;

export const OptionView = styled.TouchableOpacity`

justify-content: center;
align-items: center;
padding-right: 3%;
`;

export const OptionIcon = styled.View`
background-color: #e6e6e6;
border-radius: 77px;
justify-content: center;
align-items: center;
height: 80px;
width:80px;
`;

export const OptionText = styled.Text`
font-size: 14px;
font-weight: bold;
`;

export const Mycards = styled.View`
margin-left: 7%;
margin-right: 7%;
background-color: #e6e6e6;
flex-direction: row;
margin-top: 45px;
padding: 15px;
align-items: center;
border-radius: 8px;
`;

export const MycardsText = styled.Text`
font-weight: bold;
padding-left: 5%;
font-size: 15px;
`;

export const CardOptions = styled.View`
width: 40%;
background-color: #e6e6e6;
border-radius: 8px;
padding: 15px;
padding-left: 35px;
height: 90px;
justify-content: center;
margin-right: 12px;
`;

export const DivisionCard = styled.View`
background-color: #e6e6e6;
width: 100%;
height: 3;
margin-top: 20px;
`;

export const AreaCardCredit = styled.View`
padding-left: 7%;
padding-right: 7%;
margin-top: 20px;
`;
export const SubAreaCardCredit = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`;
export const SubAreaCardCreditText = styled.Text`
font-size: 19px;
font-weight: bold;
margin-top: 10px;
margin-bottom: 20px;
`;
export const FaturaText = styled.Text`
font-size: 15px;
color: #999999;
font-weight: bold;

`;
export const FaturaValue = styled.Text`
font-size: 30px;
font-weight: bold;
margin-top: 7px;
`;
export const LimiteCard = styled.Text`
font-size: 14px;
font-weight: bold;
color: #999;
margin-top: 7px;
`;