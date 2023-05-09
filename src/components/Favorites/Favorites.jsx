import React from 'react'
import Card from '../Card/Card'
import { connect } from 'react-redux'
import { FavContainer } from './FavoritesElement'

const Favorites = ({ myFavorites }) => {
  return (
    <FavContainer>
        {
            myFavorites?.map(fav => {
                return (
                    <Card 
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        image={fav.image}
                        status={fav.status}
                        species={fav.species}
                        gender={fav.gender}
                        origin={fav?.origin}                        
                        onClose={fav.onClose}
                    />
                )
            })
        }
    </FavContainer>
  )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null,
)(Favorites)