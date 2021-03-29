import { CHANGE_ENTER_LOADING,CHANGE_ARTIST, CHANGE_SONGS_OF_ARTIST} from './contants';
import {fromJS} from 'immutable';
import { getSingerInfoRequest } from ''



export const changeArtist = (data) => ({
    type:CHANGE_ARTIST,
    data: fromJS(data)
})
export const changeSongs = (data) => ({
    type:CHANGE_SONGS_OF_ARTIST,
    data
})
export const changeEnterLoading = (data) => ({
    type:CHANGE_ENTER_LOADING,
    data
})

export const getSingerInfo = (id) => {
    return diapatch => {
        getSingerInfoRequest(id)
        .then(data => {
            dispatchEvent(changeArtist(dtat.artist));
            dispatchEvent(changeSongs(dtat.hotSongs));
            dispatchEvent(changeEnterLoading(false));
        })
    }
}
