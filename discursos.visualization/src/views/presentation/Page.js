import React, { Component } from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Header from '../../components/header';
import Loading from '../../components/loading2/index'
import { GoMarkGithub } from 'react-icons/go'
import IconButton from '@material-ui/core/IconButton';


class Page extends Component {

  componentWillMount() {
    this.props.load()
  }

  handleClick() {
    window.open("https://github.com/JonathanLoscalzo/BI-entrega-final", "_blank")
  }

  handleGoBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <Header history={this.props.history} />

          <Loading {...this.props} reload={this.props.load}>
            <Typography variant="display3" gutterBottom>
              TP Final BI
            </Typography>

            {/* <Typography variant="headline" gutterBottom>
              Alumnos
            </Typography>
            <Typography variant="title" gutterBottom>
              Loscalzo Jonathan
            </Typography>
            <Typography variant="title" gutterBottom>
              De Luca Agustín
            </Typography> */}
            <IconButton
              onClick={this.handleClick}
              color="inherit"
              aria-label="Menu">
              <GoMarkGithub />
            </IconButton>
            <Divider />
            <Grid container spacing={16}>
              <Grid item xs={12} >
                <Typography variant="display3" gutterBottom>
                  Etapas de la entrega
              </Typography>
              </Grid>
              <Grid item xs={6} >
                <Typography variant="display1" gutterBottom>
                  E1: Obtención de los Discursos
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Por medio de la librería Puppeteer, realizamos webscraping para obtener los discursos y almacenarlos en una BD de MongoDB
                </Typography>
                <Typography variant="button" gutterBottom>

                </Typography>
              </Grid>

              <Grid item xs={6} >
                <Typography variant="display1" gutterBottom>
                  E2: Obtención de los Precios de dólar
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Por medio del sitio <a href="bankersalgo.com">bankersalgo.com</a>, obtuvimos los precios del dólar y los almacenamos en una BD de MongoDB
                </Typography>
                <Typography variant="button" gutterBottom>

                </Typography>
              </Grid>

              <Grid item xs={6} >
                <Typography variant="display1" gutterBottom>
                  E3: Transformación de datos para obtener Estadísticas
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Obtuvimos distintas métricas de los discursos. Contabilizamos palabras, Contabilizamos N-grams, quitamos palabras vacías (stop-words).
                  Todos estos cálculos, los realizamos con Pyspark, y todo fue almacenado en la BD de MongoDB.
                </Typography>
                <Typography variant="button" gutterBottom>

                </Typography>
              </Grid>

              <Grid item xs={6} >
                <Typography variant="display1" gutterBottom>
                  E4: API
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Realizamos una API con Nodejs para servir los datos y realizar algunas agregaciones con el motor de MongoDB.
                </Typography>
                <Typography variant="button" gutterBottom>

                </Typography>
              </Grid>

              <Grid item xs={6} >
                <Typography variant="display1" gutterBottom>
                  E5: Visualización
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Desarrollamos una página SPA con distintas visualizaciones y pantallas.
                  Incluso podemos ver los discursos.
                </Typography>
                <Typography variant="button" gutterBottom>

                </Typography>
              </Grid>

              {/* <Grid item xs={6} >
                <Typography variant="display1" gutterBottom>
                  EX: Localización en un Mapa de los discursos
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Intentamos utilizar la API de Google MAPS para poder encontrar la ubicación de los discursos a partir de su subtítulo.
                  Tuvimos problemas para repetir las búsquedas y que nos dieran resultados coherentes.
                </Typography>
                <Typography variant="button" gutterBottom>

                </Typography>
              </Grid> */}

              {/* <Grid item xs={6} >
                <Typography variant="display1" gutterBottom>
                  EX: Twitter
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Buscar los n-grams en twitter. Faltante
                </Typography>
                <Typography variant="button" gutterBottom>

                </Typography>
              </Grid> */}

              {/* <Grid item xs={6} >
                <Typography variant="display1" gutterBottom>
                  EX: Sentimiento
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Para el analisis de sentimientos, necesitabamos datos para entrenar un determinado modelo.
                  Observamos, que los entrenamientos eran con tweets, y por ende solo se podían analizar datos semejantes.
                </Typography>
                <Typography variant="button" gutterBottom>

                </Typography>
              </Grid> */}
            </Grid>

          </Loading>

        </div>
      </div>
    )
  }
}



export default Page
