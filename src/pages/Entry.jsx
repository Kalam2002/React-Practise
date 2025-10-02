export default function Entry(){
  return (
        <article className="entry">
            <div className="main-img-container">
                <img className="entry-img" src="https://media.istockphoto.com/id/1192780580/photo/fuji-mountain-red-maple-tree-and-fisherman-boat-with-morning-mist-in-autumn-kawaguchiko-lake.jpg?s=612x612&w=0&k=20&c=-FiZmc4qf2lVWlHf1WxysjoPJN7doER4qRmoPDLJpSw=" alt="fuji" />
            </div>
                <div className="country">
                    <div className="location">
                        <img src="./src/assets/marker.png" alt="marker" width="40px" />
                        <span >JAPAN</span>
                        <a href="">View On Google Map</a>
                    </div>
                    <h1>Mount Fuji</h1>
                    <p>12 Jan,2021 - 24 Jan,2021</p>
                    <p>Mount Fuji is famous for its iconic, near-perfect conical shape, its status as Japan's highest and most sacred mountain, and its deep cultural and spiritual significance, which has inspired centuries of art, literature, and pilgrimage.</p>
                </div>
        </article>
  )
}