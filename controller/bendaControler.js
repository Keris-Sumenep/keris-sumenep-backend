const Benda = require("../model/benda");

const getAllBenda = async (req, res) => {
  try {
    const response = await Benda.findAll();
    res.status(200).json({
      msg: "benda has been successfully loaded",
      payload: response,
    });
  } catch (error) {
    res.json(500).json({
      msg: error.message,
    });
  }
};

const getBendaByCode = async (req, res) => {
  let code = req.params.code;
  try {
    const response = await Benda.findOne({
      where: {
        kode_benda: code,
      },
    });
    res.status(200).json({
      msg: "benda has been successfully loaded",
      payload: response,
    });
  } catch (error) {
    res.json(500).json({
      msg: error.message,
    });
  }
};

const createBenda = async (req, res) => {
  const { nama, deskripsi } = req.body;
  try {
    const data = {
      nama,
      deskripsi,
    };

    await Benda.create(data);
    res.status(201).json({
      msg: "benda has been successfully created",
    });
  } catch (error) {
    res.json(500).json({
      msg: error.message,
    });
  }
};

module.exports = { getAllBenda, getBendaByCode, createBenda };
