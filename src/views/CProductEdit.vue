<template>
  <div>
    <div class="container">
      <h1 class="mb-5 mt-5">Редактировать информацию о товаре</h1>
      <div class="row mt-5">
        <div class="col-md-6">
          <label class="control-label mt-2" for="readOnlyInput">ID товара</label>
          <input class="form-control" id="readOnlyInput" type="number" :value="cproduct.id" readonly="">

          <label class="control-label mt-2" for="idProductInput">Артикул</label>
          <input class="form-control" type="number" name="name" :value="cproduct.id_product">

          <label class="control-label mt-2" for="readOnlyInput">Название товара</label>
          <input class="form-control" type="text" name="name" :value="cproduct.name">

          <label class="control-label mt-2" for="readOnlyInput">Ссылка на товар</label>
          <input class="form-control" type="text" name="name" :value="cproduct.url">

          <label class="control-label mt-2" for="readOnlyInput">Категория</label>
          <input class="form-control" type="text" name="name" :value="cproduct.categoryName">
        </div>

        <div class="col-md-6">
          <label class="control-label mt-2" for="readOnlyInput">Производитель</label>
          <input class="form-control" type="text" name="name" :value="cproduct.vendorName">

          <label class="control-label mt-2" for="readOnlyInput">Магазин</label>
          <select class="form-control" :value="cproduct.shop">
            <option>М.видео</option>
            <option>Citilink</option>
            <option>Wildberries</option>
          </select>

          <label class="control-label mt-2" for="readOnlyInput">Цена</label>
          <input class="form-control" type="number" name="name" :value="cproduct.price">

          <label class="control-label mt-2" for="readOnlyInput">Создан</label>
          <input class="form-control" type="date" name="name" :value="cproduct.created">

          <label class="control-label mt-2" for="readOnlyInput">Статус</label>
          <input class="form-control" type="checkbox" name="name" :value="cproduct.status">
        </div>
      </div>
      <div class="row mt-5 mb-5">
        <div class="col-6">
          <center>
            <button class="btn btn-outline-success" type='submit'>Сохранить</button>
          </center>
        </div>
        <div class="col-6">
          <center>
            <button class="btn btn-outline-danger" type='submit'>Удалить</button>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      cproduct: this.$store.getters.cproducts.find(cproduct => cproduct.id === this.$route.params.id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
