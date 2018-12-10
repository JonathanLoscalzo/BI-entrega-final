import { detailsService } from '../services';

export const getWordCounts = id => {
  return async (dispatch, getState) => {
    try {
      let wordcounts = await detailsService.getSpeechById(id);
      dispatch({
        type: 'GET_SPEECHS_BY_ID_SUCCESS',
        data: { id, wordcounts }
      });
    } catch (error) {
      dispatch({
        type: 'GET_SPEECHS_BY_ID_ERROR'
      });
    }

  };
};

export const resetWordCount = id => ({
  type: 'RESET_WORD_COUNT',
});
