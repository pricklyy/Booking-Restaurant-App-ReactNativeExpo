import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clv1hnmk220jc08uxktrk5kok/master"

const getSlider = async () => {
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
`
    const result = await request(MASTER_URL, query);

    return result;
}


const getPlace = async () => {
    const query = gql`
    query GetPlace {
        places {
          id
          name
          icon {
            url
          }
        }
      }
    `
    const result = await request(MASTER_URL, query);

    return result;
}

const getRestaurantList=async() => {
    const query = gql `
    query getRestaurantList {
        restaurantLists {
          id
          name
          contact
          address
          about
          place {
            name
          }
          openingTime
          closingTime
          image {
            url
          }
        }
      }
    `
    const result = await request(MASTER_URL, query);

    return result;
}

  const getRestaurantListByPlace=async(place) => {
    const query = gql `
    query getRestaurantList {
      restaurantLists(where: {place: {name: "`+place+`"}}) {
        id
        name
        contact
        address
        about
        place {
          name
        }
        openingTime
        closingTime
        image {
          url
        }
      }
    }
    `
    const result = await request(MASTER_URL, query);

    return result;
  }

  const createBooking = async(data) => {
    const mutationQuery = gql `
    mutation createBooking {
      createBooking(
        data: {
          bookingStatus: Booked, 
          restaurantList: {connect: {id: "`+data.restaurantId+`"}},
           time: "`+data.time+`", 
           userEmail: "`+data.userEmail+`", 
           userName: "`+data.userName+`", 
           date: "`+data.date+`"}
      ) {
        id
      }
      publishManyBookings(to: PUBLISHED) {
        count
      }
    }
    
    `
    const result = await request(MASTER_URL, mutationQuery);

    return result;
  }

  const getUserBookings = async(userEmail) => {
    const query = gql `
    query getUserBookings {
      bookings(orderBy: updatedAt_DESC, where: {userEmail: "`+userEmail+`"}) {
        time
        userName
        userEmail
        date
        bookingStatus
        id
        restaurantList {
          id
          name
          address
          contact
          about
          image {
            url
          }
        }
      }
    }
    
    `
    const result = await request(MASTER_URL, query);

    return result;
  }
export default {
    getSlider,
    getPlace,
    getRestaurantList,
    getRestaurantListByPlace,
    createBooking,
    getUserBookings
}

