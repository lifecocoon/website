import React, { Component } from 'react';
import './App.css';

import { Box, Text } from 'axs'
import { Flex, Button, Input, Heading } from 'axs-ui'
import Step from './components/Step'
import Media from './components/Media'
import { Chain } from './components/BlockChain'

class App extends Component {
  render() {
    return (
      <Flex css={{height: '100%'}}>
        <Flex flexNone flexDirection={'column'} width={0.25} css={{height: '100%'}}>
          <Flex flexNone m1 border p1>
            <Box flexAuto mr={1}>
              {/*<Label htmlFor="inputData">
                Add data to chain
              </Label>*/}
              <Input
                placeholder="input data here"
                id="inputData"
                name="inputData"
              />
            </Box>
            <Button flexNone bgFuschia>
              Add
            </Button>
          </Flex>

          <Box flexAuto css={{overflowY: 'scroll'}}>
            <Chain>
              <Text fontSize={3} center caps>einde</Text>
            </Chain>
          </Box>
        </Flex>
        <Box flexAuto css={{height: '100%', overflowY: 'scroll'}}>
          <Heading fontSize={1} center>LifeCocoon</Heading>
          <Heading fontSize={3} center>cryptografie en blockchain helder uitgelegd</Heading>

          <Step heading="Situatieschets">
            <Media url="http://images.wisegeek.com/hotel-front-desk-employee.jpg">
              <Text bold>
                U komt aan bij uw hotel en gaat inchecken.
              </Text>
              <Text>
                Op grond van <a href="http://wetten.overheid.nl/BWBR0001854/2017-01-01#BoekDerde_TiteldeelII_Artikel438">Wetboek SR 438</a> is het 'nachtverblijf' nu verplicht om de volgende informatie over u te administreren, aan de hand van een te overleggen geldig reisdocument of identiteitsbewijs.
              </Text>
              <Box is='ul' mt={1}>
                <Text is='li'>Naam en woonplaats</Text>
                <Text is='li'>Dag van aankomst</Text>
                <Text is='li'>Aard van overlegde document</Text>
              </Box>
            </Media>

            <Flex alignItems="center" mt={2}>
              <Media url="http://www.prixos.nl/autoimg/1887510/500x500/ffffff/beveiligingsmap-hidentity-voor-paspoort.jpg">
                <Text bold>
                  U geeft uw paspoort.
                </Text>
                <Text>
                  Idealiter zou het hotel nu aan de hand van uw paspoort handmatig een geschreven of gedigitaliseerd register bijwerken. De medewerker noteert de bovenstaande gegevens en geeft u uw paspoort terug.
                </Text>
                <Text mt={1}>
                  De praktijk is echter dat vaak een (digitale) kopie gemaakt wordt van uw paspoort. Makkelijk voor het hotel en de medewerker, maar er wordt veel meer informatie geregistreerd dan wettelijk nodig, zoals bijvoorbeeld het BSN. De <a href="https://autoriteitpersoonsgegevens.nl/sites/default/files/downloads/rs/rs_kopie-identiteitsbewijs.pdf">CBP</a> signaleert deze trend als een groeiend probleem. Hoe meer onnodige gegevens over identiteiten verspreid zijn, hoe makkelijker het is om identiteitsfraude te plegen.
                </Text>
              </Media>
            </Flex>

            <Flex alignItems="center" mt={2}>
              <Media url="http://gezoarsefeesten.yolasite.com/resources/oplossingen%20sleutel.jpg">
                <Text bold>
                  LifeCocoon geeft een veilig alternatief
                </Text>
                <Text>
                  Op deze pagina zullen we het LifeCocoon algoritme stap voor stap uitleggen. LifeCocoon is een veilige en alternatieve manier van identificatie. N.b. de stappen zijn veel eenvoudiger dan voor werkelijk gebruik nodig is, maar zorgt dat u op een gemakkelijke manier kennis kunt maken met de wereld van cryptografie en blockchain.
                </Text>
              </Media>
            </Flex>
          </Step>
        </Box>
      </Flex>
    );
  }
}

export default App;
