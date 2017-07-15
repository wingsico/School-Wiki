<template>
  <div class="related-area">
    <transition name="custom-classes-transition" enter-active-class="zoomInRight" leave-active-class="zoomOutRight">
      <div class="records animated" v-if="!state.isValueExist" key="histroy">
        <ul>
          <li v-for="(item,index) in historyRecords" :key="index">
            <span class="record" @click="addToInput(index)">{{ item }}</span>
            <i class="iconfont icon-fangdajing"></i>
          </li>
        </ul>
				<p class="tip">输入<span>尽量简短</span>的关键字才能搜到哦～</p>
      </div>
      <SearchResult v-else :searchResult="searchResult" :searchValue="searchValue" key="result" class="animated result"></SearchResult>
    </transition>
  </div>
</template>

<script>
	import SearchResult from '../search_result/SearchResult'
	export default {
		data() {
			return {
				state: {
					isValueExist: false,
				},
				searchResult: {},
				searchValue: '',
				historyRecords: []
			}
		},
		methods: {

			addToInput(index) {
				this.$root.eventHub.$emit('addValue', this.historyRecords[index])
			},

			getLocalStorage() {
				let records = JSON.parse(localStorage.getItem('searchRecords'))
				this.historyRecords = records.splice(0, 3)
			},

			getSearchResult() {
				this.$http({
						method:'post',
						url: 'https://wiki.ncuos.com/api/hot/hotsearch?query_string=' + this.searchValue,
					})
					.then((res) => {
						this.searchResult = res.data
						this.searchResult.data.forEach(function(obj) {
							obj.title = obj.title.split(this.searchValue).join('<span class="text-keywords">'+ this.searchValue +'</span>')
							console.log(obj.title)
						}, this);

						this.state.isValueExist = true
					})
			}
		},
		components: {
			SearchResult
		},
		created() {

			this.$root.eventHub.$on('hasValue', (val) => {
				// console.log(val)
				this.searchValue = val
				this.getSearchResult()

			})

			this.$root.eventHub.$on('noValue', () => {
				this.state.isValueExist = false
			})

			this.getLocalStorage()
			this.setTitle('搜一搜')
		}
	}

</script>

<style scoped>
	.related-area {
		width: 100%;
		text-align: center;
		padding-top: 0.1rem;
		z-index: 0;
		height: 100%;
		box-sizing: border-box;
	}
	
	.related-area .records {
		display: block;
		animation-duration: 0.5s;
		/*height: calc(100% - 1.9rem);*/
		box-sizing: border-box;
		/*position: absolute;
		width: calc(100% - 0.8rem);*/

	}
	
	.related-area .records>span {
		color: #ccc;
	}
	
	.related-area li {
		position: relative;
		display: block;
		text-align: left;
		padding-left: 1rem;
		font-size: 0.4rem;
		height: 1rem;
		line-height: 1rem;
		border-bottom: 1px solid #cdcdcd;
		letter-spacing: 0.01rem;
	}
	
	.related-area li span {
		display: block;
	}
	
	.related-area .result {
		animation-duration: 0.5s;
		position: absolute;
		top: 1.5rem;
		width: calc(100% - 0.8rem);
	}
	
	.iconfont {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0.25rem;
		font-size: 0.5rem;
		color: #737373;
	}

	.tip {
		color: #44ceff;
		font-size: 0.4rem;
		height: 0.8rem;
		line-height: 0.8rem;
		margin-top: 0.4rem;
	}
	
	.tip span {
		color: #ff8080;
	}


</style>
