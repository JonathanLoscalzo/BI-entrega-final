import { listingService } from '../services';
import { mainService } from '../../../services';
import to from '../../../helpers/to'
import { toast } from 'react-toastify';

export const getProductsList = image => {
  return async (dispatch, getState) => {
    try {

      dispatch({
        type: 'GET_CATALOG'
      });

      let idCatalogProcess, streamId, products, err;

      [err, idCatalogProcess] = await to(listingService.getCatalogProcessId());

      if (err) {
        throw "No se pudo obtener el id de proceso para instanciar"
      }

      [err, streamId] = await to(mainService.startProcess(idCatalogProcess));

      if (err) {
        throw "No se pudo crear una instancia del proceso para obtener el catálogo"
      }

      [err, products] = await to(mainService.getPullData(streamId));

      if (err || !products) {
        throw "No se pudo encontrar los productos en el stream"
      }

      dispatch({
        type: 'GET_CATALOG_SUCCESS',
        data: products
      });

    } catch (error) {
      toast.error(error);
      dispatch({
        type: 'GET_CATALOG_ERROR'
      });
    }

  };
};
