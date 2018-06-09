<template>
	<div>
		<button class="newbutton" @click="Hnewclick">新增</button>
		<div v-show="mes">
			<input type="text" class="inputborder" v-model="VlueInput" placeholder="输入新增加的人数" /><button type="" @click="Dentcon" class="subclass">提交</button>
		</div>
		<table class="class">
			<thead>
				<tr>
					<th>姓名</th>
					<th>编辑</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(list ,index) in prosp">
					<td>{{list.name}}</td>
					<td :id="index" @click="HeaderDeletD">{{list.bj}}</td>
					<td :id="index" @click="HeaderDelet">{{list.tad}}</td>
				</tr>
			</tbody>
		</table>
		<footer-nav></footer-nav>
		<div v-show="msctrue" class="black">
			<input type="text" class="inputborder" v-model="VlueBlack" /><button type="" @click="DentconDD" class="subclass">提交</button>
		</div>
	</div>
</template>

<script>
	
	var TbodyCont = {
		template:"<td></td>"
	}

	import FooterNav from '../../../components/footer.vue'
	export default{
		components:{
			FooterNav,
			TbodyCont
		},
		data(){
			return{
				mes:false,
				VlueInput:'',				//这里的命名是为了方便下面的script能获取数据，因为vue是一个MVVM框架，主要的操作方式便是数据操作
				VlueBlack:'',
				msctrue:false,
				prosp:[
					{'name':'李磊',"tad":"删除","bj":"编辑"},		//初始数组
				],
				NameVlue:''
			}
		},
		methods:{
			HeaderDelet(index){
				var id = index.target.id      				//删除功能，index为索引，上面的v-for指令 会获取到一个index值，在当前循环的项目中也需要绑定一个index值，可以写为:id="index"
															//再在这里进行index传递HeaderDelet（index） 这样我们就能获取到当前点击和要删除的是哪一个
				this.prosp.splice(id ,1)   
			},
			Hnewclick(){
				this.mes = true                  			//点击新增按钮显示出input增加框，这里用指令v-show来控制显示和隐藏的 当点击时mes=true进行显示
			},
			HeaderDeletD(index){
				var ThisId = index.target.id
				this.NameVlue = ThisId
				this.msctrue = true
				// this.prosp[ThisId].name = this.VlueBlack; 			index.target.id 是我们之前绑定的index索引这里不懂得可以用console.log进行打印一下你会看到索引的值
																		//当我们拿到索引后 把索引放在当前data里的NameVlue里面 目的是为了可以让下面的修改值的事件获取到数据	
				// 
			},
			DentconDD(){
				this.prosp[this.NameVlue].name = this.VlueBlack			
				// this.prosp[this.NameVlue].name = this.VlueBlack		上面的NameValue在这里有了用处，我们首先知道了 获取到的修改框的值是this.VlueBlack，那么我们要改变点击的值
																		//就相当于改变当前prosp数组里的值所以要这么写 this.prosp[this.NameVlue].name = this.VlueBlack
				this.msctrue = false
			},
			Dentcon(){
				if(this.VlueInput.trim() == '')
				{
					console.log("请输入值")
				}
				else{
					var t = this.VlueInput;							//这里是点击新增按钮提交新增的值的，因为在数组中是以｛｝对象当时来进行渲染的所以在新增时我们也要用对象的方式进行增加
					var c = {}
					c.name = t
					c.tad = this.prosp[0].tad
					c.bj = this.prosp[0].bj
					this.prosp.push(c)
				}
			}
		}
	}
</script>

<style>
	.class{
		width:100%;
		margin-top: 20px;
	}
	.newbutton{
		padding:10px 50px 10px 50px;
		background-color: #41b883;
		border:1px solid #41b883;
		color:#FFF;
		border-radius: 5px;
		margin-bottom:20px;
	}
	.inputborder{
		height: 30px;
	}
	.subclass{
		padding: 5.5px 15px 7px 15px;
		border-radius: 2px;
		color:#FFF;
		background-color: #41b883;
		border:1px solid #41b883;
	}
	.black{
		width: 100%;
		height: 800px;
		background-color: #000;
		background:rgba(0,0,0,0.5);
		position: absolute;
		top:0;
		padding-top:60vw; 
	}
</style>