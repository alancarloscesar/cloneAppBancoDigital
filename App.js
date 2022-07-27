import React,{useState} from 'react';
import { View,Text,StatusBar, ScrollView, SafeAreaView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  AreaHeader,
  AreaIcons,
  AreaUser,
  AreaIconsPerson,
  AreaIconsDireita,
  TouchIcon,
  TouchIconPerson,
  AreaConta,
  ValorConta,
  AreaContaText,
  OptionIcon,
  OptionText,
  OptionView,
  Mycards,
  MycardsText,
  CardOptions,
  DivisionCard,
  AreaCardCredit,
  SubAreaCardCredit,
  SubAreaCardCreditText,
  FaturaText,
  FaturaValue,
  LimiteCard,
} from './styles'

export default function App() {

const [visible, setVisible] = useState(false);

function TrocaVisible(){
  setVisible(!visible)//clicou muda para true, se estiver true muda para false
}

 return (
     <Container>
     <StatusBar backgroundColor='#820ad1' />
     <AreaHeader>
        <AreaIcons>

          <AreaIconsPerson>
            <TouchIconPerson>
            <Ionicons
            name="person-outline" size={25} color="#fff"
            />
            </TouchIconPerson>
          </AreaIconsPerson>

          <AreaIconsDireita>
          
            <TouchIcon onPress={TrocaVisible}>
              {
              visible ? (
                <Ionicons
                name="eye-off-outline" size={25} color="#fff"
                />
              ) : (
              <Ionicons
              name="eye-outline" size={25} color="#fff"
              />
              )
              }
              
            </TouchIcon>
          
            <TouchIcon>
              <Ionicons
              name="help-circle-outline" size={25} color="#fff"
              />
            </TouchIcon>
              
            <TouchIcon>
              <Ionicons
              name="person-add-outline" size={25} color="#fff"
              />
            </TouchIcon>

          </AreaIconsDireita>
 
        </AreaIcons>
        <AreaUser>
        <Text style={{
          fontSize: 17,
          fontWeight:'bold',
          color: '#fff',
          paddingTop: 30
        }}>Olá, Alan</Text>
        </AreaUser>
     </AreaHeader>

    <AreaConta>
        <AreaContaText>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Conta</Text>
          <Ionicons
          name='chevron-forward-outline'
          size={17}
          color='#666'
          />
        </AreaContaText>

        <ValorConta>
         {
           visible ? (
            <Text>R$ 158.957,89</Text>
           ) : (
            <View>
              <Ionicons style={{marginTop:-10}} name='ellipsis-horizontal' size={50} color="#000"/>
            </View>
           )
         }
        </ValorConta>
    </AreaConta>
    
    

<View style={{marginTop: 45}}>
  
    <ScrollView 
    horizontal={true} 
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      marginLeft: 24,
      paddingRight: 50
    }}
    >

        <OptionView>
          <OptionIcon>
            <Ionicons name='cash-outline' size={30} color='#212121'/>
          </OptionIcon>
            
          <OptionText>Área Pix</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name='qr-code-outline' size={30} color='#212121'/>
          </OptionIcon>
            
          <OptionText>Pagar</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name='journal-outline' size={30} color='#212121'/>
          </OptionIcon>
            
          <OptionText>Transferir</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name='leaf-outline' size={30} color='#212121'/>
          </OptionIcon>
            
          <OptionText>Depositar</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name='phone-portrait-outline' size={30} color='#212121'/>
          </OptionIcon>
            
          <OptionText>Recarga de Celular</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name='receipt-outline' size={30} color='#212121'/>
          </OptionIcon>
            
          <OptionText>Cobrar</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name='heart-outline' size={30} color='#212121'/>
          </OptionIcon>
            
          <OptionText>Doação</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name='globe-outline' size={30} color='#212121'/>
          </OptionIcon>
            
          <OptionText>Transferir Internac.</OptionText>
        </OptionView>

        
    </ScrollView>
</View>

<Mycards>
    <Ionicons name='journal-outline' size={25} color='#000' />
    <MycardsText>Meus cartões</MycardsText>
</Mycards>


<View>
<ScrollView 
horizontal 
showsHorizontalScrollIndicator={false}
contentContainerStyle={{
  marginTop:20,
  paddingLeft:'7%',
  //backgroundColor:'blue',

}}
>
  <CardOptions>
    <Text>Conheça <Text style={{color:'#820ad1'}}>Nubank Vida: </Text>Um seguro simples e que cabe no ...</Text>
  </CardOptions>

  <CardOptions>
    <Text>Salve seus amigos da burocracia. <Text style={{color:'#820ad1'}}>Faça um convite ...</Text></Text>
  </CardOptions>
</ScrollView>
</View>

<DivisionCard/>

<ScrollView>
<AreaCardCredit>
  <Ionicons name='journal-outline' size={25} color='#000' />
  <SubAreaCardCredit>
    <SubAreaCardCreditText>Cartão de crédito</SubAreaCardCreditText>
    <Ionicons name='chevron-forward-outline' size={17} color='#666' />
  </SubAreaCardCredit>
  <FaturaText>Fatura atual</FaturaText>
  <FaturaValue>R$ 90,45</FaturaValue>
  <LimiteCard>Limite disponível de <Text style={{fontSize: 15}}>R$ 513,72</Text></LimiteCard>
</AreaCardCredit>
</ScrollView>

</Container>


  );
}