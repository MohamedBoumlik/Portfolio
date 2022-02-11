import pic from './images/programming.png'


function Header() {
  return <div>
    <section class="bg-white mt-20">
      <div class="max-w-2xl px-6 text-center mx-auto">
        <h2 class="text-3xl font-semibold text-gray-800">Hi, <span class="bg-indigo-600 text-white rounded px-1">I’m Mohamed</span> </h2>
        <p class="text-gray-600 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aliquam veniam suscipit eaque iure, eligendi harum expedita cupiditate sequi, culpa autem! Quaerat ex fugit iste suscipit reiciendis, accusamus ipsum quae.</p>

        <div class="flex items-end justify-center mt-16">
            <img src={pic} alt="" />
        </div>
      </div>
    </section>
  </div>;
}

export default Header;
