<template>
	<div>
		<div class="container">
			<div class="panel panel-primary" style="margin-top: 0px">
				<table class="table table-responsive mt-3">
					<thead><tr>
						<th>Артикуw2л</th>
						<th>Название</th>
						<th>Категория</th>
						<th>Вендор</th>
						<th>Магазин</th>
						<th>Цена</th>
						<th>Статус</th>
						<th style="border-bottom: 0px; border-top: 0px;"></th>
					</tr></thead>
					<tbody>
					<tr v-for="(item, index) in matches" :key="index">
						<td>{{ item.id_product }}</td>
						<td><a :href="item.url">{{ item.name }}</a></td>
						<td>{{ item.categoryName }}</td>
						<td>{{ item.vendorName }}</td>
						<td v-if="item.shop === 'М.видео'"><a href="http://mvideo.ru"><img src="../../static/img/mvideo_logo.jpg" alt="True" height="6%"/></a></td>
						<td v-else-if="item.shop === 'Ситилинк'"><a href="https://www.citilink.ru"><img src="../../static/img/citilink_logo.png" alt="True" height="2%"/></a></td>
						<td v-else="item.shop === 'Wildberries'"><a href="https://www.wildberries.ru"><img src="../../static/img/wildberries_logo.png" alt="True" height="50%"/></a></td>
						<td>{{ item.price }} ₽</td>
						<td v-if="item.status"><img src="../../static/img/true.png" alt="True" height="80%"/></td>
						<td v-else><img src="../../static/img/false.png" alt="True" height="80%"/></td>
						<td style="border-top: 0px;"><router-link class="button-edit" :to="{ name: 'matchEdit', params: { id: item.id }}">
							<img src="../../static/img/edit.png" height="15px"/></router-link>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
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
				apiUrl
			}
		},
		mounted() {
			this.$nextTick(async () => {
				if (this.matches.length === 0) {
					this.$router.push({name: "loader"});
				}
			});
		},
		methods: {
			formatDate
		},
		computed: {
			...mapState({
				matches: state => state.matches
			})
		}
	}
</script>
