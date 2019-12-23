<template>
  <div>
    <el-button type="primary" @click="handleAdd">添加商品</el-button>
    <el-table :data="products" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="price" label="价格" width="180"></el-table-column>
      <el-table-column prop="handle" label="操作">
        <template slot-scope="scope">
          <el-button type="danger" @click="handleRemove(scope.row)">删除</el-button>
          <el-button type="primary">添加到购物车</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div>
        <el-form label-width="80px" :model="form">
          <el-form-item label=" ID">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="form.price"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: null,
        name: "",
        price: null
      },
      dialogVisible: false,
      products: [],
      tableData: []
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    async handleRemove(row) {
      console.log(row.id);
    },
    async getProduct() {
      const res = await this.$axios.get("/api/admin/products");
      console.log(res);
      this.products = res.data.prods;
    },
    handleAdd() {
      this.dialogVisible = true;
    },
    handleClose() {
      this.dialogVisible = false;
    },
    handleSubmit: async function() {
      console.log(this);

      const res = await this.$axios.post("/api/admin/product", this.form);
      console.log(res);
      if (res.data.success) {
        this.getProduct();
      }
      this.handleClose();
    }
  }
};
</script>

<style>
</style>