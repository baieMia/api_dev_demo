 <template v-for="item in mainList">
    <div>
        <p>接口链接：{{links}}</p>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import {getUserInfo} from '../api/getData.js'
export default {
  data() {
    return {
       links:sessionStorage.getItem('baseURL')
    }
  },
  components: {

  },
  created(){
      
  }
}
</script>

<style scoped>
.projectItem
{
  margin: 5px;
  width: 200px;
  height: 120px;
  /*border:1px soild;*/
  box-shadow: 1px 1px 10px;
}
.projectItem a
{
  min-width: 200px;
}
.projectItem a span
{
  text-align: center;
  display: block;
}
</style>
