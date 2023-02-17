import imgError from"./../assets/page-not-found.png"

const Error404 = () => {
  return (
    <section className="text-gray-800 dark:text-white">
      <h2 className="text-3xl sm:text-4xl text-center py-4 font-bold">Page not found</h2>
      <img src={imgError} alt="Not found" className="block mx-auto w-40 h-auto m-0 sm:w-52 mt-4"/>
    </section>
  )
}

export default Error404