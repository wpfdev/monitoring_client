<template>
	<div>
		<div class="container">
			<form class="">
				<table>
					<tr>
						<td><div class="form-group mt-3">
							<input type="number" class="form-control" placeholder="ID" v-model="productForm.id" />
						</div></td>
						<td><div class="form-group mt-3">
							<input type="number" class="form-control" placeholder="Артикул" v-model="productForm.id_product" />
						</div></td>
						<td><div class="form-group mt-3">
							<input type="text" class="form-control" placeholder="Название" v-model="productForm.name" />
						</div></td>
						<td><div class="form-group mt-3">
							<input type="number" step="0.01" class="form-control" placeholder="Цена" v-model="productForm.price" />
						</div></td>
						<td><div class="form-group mt-3">
							<input type="checkbox" class="form-control" placeholder="Статус" v-model="productForm.status" />
						</div></td>
					</tr>
					<tr>
						<td><div class="form-group">
							<input type="text" class="form-control" placeholder="Производитель" v-model="productForm.vendorName" />
						</div></td>
						<td><div class="form-group">
							<input type="text" class="form-control" placeholder="URL" v-model="productForm.url" />
						</div></td>
						<td><div class="form-group">
							<input type="text" class="form-control" placeholder="Категория" v-model="productForm.categoryName" />
						</div></td>
						<td><div class="form-group">
							<input type="text" class="form-control" placeholder="Дата" v-model="productForm.created" />
						</div></td>
					  <td><input type="submit" value="Сохранить" class="btn btn-outline-link ml-3" v-on:click="addProduct(productForm)"/></td>
					</tr>
				</table>
			</form>
			<table class="table mt-3">
			  <thead><tr>
			    <th>Артикул</th>
			    <th>Название</th>
			    <th>Категория</th>
			    <th>Вендор</th>
			    <th>Магазин</th>
			    <th>Цена</th>
			    <th>Статус</th>
			    <th style="border-bottom: 0px; border-top: 0px;"></th>
			  </tr></thead>
			  <tr v-for="item, i in mproducts">
			      <td>{{ item.id_product }}</td>
			      <td><a :href="item.url">{{ item.name }}</a></td>
			      <td>{{ item.categoryName }}</td>
			      <td>{{ item.vendorName }}</td>
						<td>{{ item.price }} ₽</td>
			      <td v-if="item.status"><img src="../../static/img/true.png" alt="True" height="80%"/></td>
			      <td v-else><img src="../../static/img/false.png" alt="True" height="80%"/></td>
			      <td v-if="editProduct !== item.id" style="border-top: 0px;">
			        <button class="btn button-edit" v-on:click="editProduct = item.id">
			          <img src="../../static/img/edit.png" height="15px"/>
			        </button>
			      </td>
			    <div v-if="editProduct === item.id">
			      <td colspan="2" style="padding-right: 0px; padding-left: 0px;">
			        <input class="form-control mt-1" v-on:keyup.13="updateProduct(item)" v-model="item.name" />
			        <input class="form-control mt-1" v-on:keyup.13="updateProduct(item)" v-model="item.categoryName" />
			        <input class="form-control mt-1" v-on:keyup.13="updateProduct(item)" v-model="item.vendorName" />
			        <input class="form-control mt-1" v-on:keyup.13="updateProduct(item)" v-model="item.price" />
			        <button class="btn btn-success mt-1" style="padding-left: 47px; padding-right: 47px;" v-on:click="updateProduct(item)">Сохранить</button>
			        <button class="btn btn-danger mt-1" style="padding-left: 54px; padding-right: 54px;"v-on:click="deleteProduct(item.id, i)"> Удалить </button>
			      </td>
			    </div>
			  </tr>
			</table>
		</div>
	</div>
</template>

<script>
	import { sources, apiUrl } from "../config";
	import { formatDate } from "../utils";
	import { mapState } from 'vuex';

	export default {
		data(){
			return {
				apiUrl,
				editProduct: null,
				productForm: {
					id: "",
					id_product: "",
					name: "",
					price: "",
					categoryId: "",
					categoryName: "",
					vendorName: "",
					url: "",
					status: false,
					created: ""
				}
			}
		},
		mounted() {
			this.$nextTick(async () => {
				if (this.mproducts.length === 0) {
					this.$router.push({name: "loader"});
				}
			});
		},
		methods: {
			formatDate,
			deleteProduct(id, i) {
				fetch("http://localhost:8000/api/productmy/" + id, {
					method: "DELETE"
				})
				.then(() => {
					this.mproducts.splice(i, 1);
				})
			},
			updateProduct(mproduct) {
				fetch("http://localhost:8000/api/productmy/" + mproduct.id, {
					body: JSON.stringify(mproduct),
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then(() => {
					this.editProduct = null;
				})
			},
			addProduct(mproduct) {
				fetch("http://localhost:8000/api/productmy/", {
					body: JSON.stringify(mproduct),
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
				});
				console.log(mproduct.id_product);
			},
		},
		computed: {
			...mapState({
				mproducts: state => state.mproducts
			})
		}
	}
</script>
