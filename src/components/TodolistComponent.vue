<template>
  <div class="rounded-[10px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.15)]">
    <!-- Tabs -->
    <ul class="flex">
      <li class="grow"><a class="block border-b-2 border-[#333] text-center font-bold text-[14px] text-[#333] py-4" href="#">全部</a></li>
      <li class="grow"><a class="block text-center font-bold text-[14px] text-[#9F9A91] py-4" href="#">待完成</a></li>
      <li class="grow"><a class="block text-center font-bold text-[14px] text-[#9F9A91] py-4" href="#">已完成</a></li>
    </ul>
    <ul class="p-6">
      <li class="border-b border-[#E5E5E5] pb-[15px] mb-4">
        <input class="mr-4" type="checkbox" name="todo1" id="todo1">
        <label for="todo1">把冰箱發霉的檸檬拿去丟</label>
      </li>
      <li class="border-b border-[#E5E5E5] pb-[15px] mb-4">
        <input class="mr-4" type="checkbox" name="todo2" id="todo2" checked>
        <label class="line-through text-[#9F9A91]" for="todo2">打電話叫媽媽匯款給我</label>
      </li>
      <li class="border-b border-[#E5E5E5] pb-[15px] mb-4">
        <input class="mr-4" type="checkbox" name="todo1" id="todo1">
        <label for="todo1">把冰箱發霉的檸檬拿去丟</label>
      </li>
      <li class="border-b border-[#E5E5E5] pb-[15px] mb-4">
        <input class="mr-4" type="checkbox" name="todo2" id="todo2" checked>
        <label class="line-through text-[#9F9A91]" for="todo2">打電話叫媽媽匯款給我</label>
      </li>
      <li class="border-b border-[#E5E5E5] pb-[15px] mb-4">
        <input class="mr-4" type="checkbox" name="todo1" id="todo1">
        <label for="todo1">把冰箱發霉的檸檬拿去丟</label>
      </li>
      <li class="border-b border-[#E5E5E5] pb-[15px] mb-4">
        <input class="mr-4" type="checkbox" name="todo2" id="todo2" checked>
        <label class="line-through text-[#9F9A91]" for="todo2">打電話叫媽媽匯款給我</label>
      </li>
    </ul>
  </div>
</template>